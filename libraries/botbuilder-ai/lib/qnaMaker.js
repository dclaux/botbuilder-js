"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise-native");
const entities = require("html-entities");
var htmlentities = new entities.AllHtmlEntities();
const BASEAPI_PATH = 'qnamaker/v3.0/knowledgebases/';
class QnAMaker {
    constructor(settings) {
        this.settings = Object.assign({
            scoreThreshold: 0.3,
            top: 1,
            answerBeforeNext: false
        }, settings);
        if (!this.settings.serviceEndpoint) {
            this.settings.serviceEndpoint = 'https://westus.api.cognitive.microsoft.com/';
        }
        else if (!this.settings.serviceEndpoint.endsWith('/')) {
            this.settings.serviceEndpoint += '/';
        }
    }
    onProcessRequest(context, next) {
        if (this.settings.answerBeforeNext) {
            // Attempt to answer user and only call next() if not answered
            return this.answer(context)
                .then((answered) => !answered ? next() : Promise.resolve());
        }
        else {
            // Call next() and then attempt to answer only if nothing else responded
            return next()
                .then(() => !context.responded ? this.answer(context).then(() => { }) : Promise.resolve());
        }
    }
    /**
     * Calls [generateAnswer()](#generateanswer) and sends the answer as a message ot the user.
     * Returns a value of `true` if an answer was found and sent. If multiple answers are
     * returned the first one will be delivered.
     * @param context Context for the current turn of conversation with the use.
     */
    answer(context) {
        const { top, scoreThreshold } = this.settings;
        return this.generateAnswer(context.request.text, top, scoreThreshold).then((answers) => {
            if (answers.length > 0) {
                return context.sendActivity({ text: answers[0].answer, type: 'message' }).then(() => true);
            }
            else {
                return Promise.resolve(false);
            }
        });
    }
    /**
     * Calls the QnA Maker service to generate answer(s) for a question. The returned answers will
     * be sorted by score with the top scoring answer returned first.
     * @param question The question to answer.
     * @param top (Optional) number of answers to return. Defaults to a value of `1`.
     * @param scoreThreshold (Optional) minimum answer score needed to be considered a match to questions. Defaults to a value of `0.0`.
     */
    generateAnswer(question, top, scoreThreshold) {
        const { serviceEndpoint } = this.settings;
        return this.callService(serviceEndpoint, question, typeof top === 'number' ? top : 1).then((answers) => {
            const minScore = typeof scoreThreshold === 'number' ? scoreThreshold : 0.0;
            return answers.filter((ans) => ans.score >= minScore).sort((a, b) => b.score - a.score);
        });
    }
    callService(serviceEndpoint, question, top) {
        const url = `${serviceEndpoint}${BASEAPI_PATH}${this.settings.knowledgeBaseId}/generateanswer`;
        return request({
            url: url,
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': this.settings.subscriptionKey
            },
            json: {
                question: question,
                top: top
            }
        }).then(result => {
            const answers = [];
            return (result.answers || []).map((ans) => {
                return { score: ans.score / 100, answer: htmlentities.decode(ans.answer) };
            });
        });
    }
}
exports.QnAMaker = QnAMaker;
//# sourceMappingURL=qnaMaker.js.map