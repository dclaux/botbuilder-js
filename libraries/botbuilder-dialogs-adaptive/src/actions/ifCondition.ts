/**
 * @module botbuilder-dialogs-adaptive
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { DialogTurnResult, Dialog, DialogDependencies, DialogContext, Configurable } from 'botbuilder-dialogs';
import { ActionScope, ActionScopeConfiguration } from './actionScope';
import { BoolExpression } from '../expressionProperties';

export interface IfConditionConfiguration extends ActionScopeConfiguration {
    condition?: string | boolean;

    elseActions?: Dialog[];

    disabled?: string | boolean;
}

export class IfCondition<O extends object = {}> extends Dialog<O> implements DialogDependencies, Configurable {
    public static declarativeType = 'Microsoft.IfCondition';

    public constructor();
    public constructor(condition?: string, elseActions?: Dialog[]) {
        super();
        if (condition) { this.condition = new BoolExpression(condition); }
        if (elseActions) { this.elseActions = elseActions; }
    }

    /**
     * Conditional expression to evaluate.
     */
    public condition: BoolExpression;

    /**
     * The actions to run if [condition](#condition) returns true.
     */
    public actions: Dialog[] = [];

    /**
     * The actions to run if [condition](#condition) returns false.
     */
    public elseActions: Dialog[] = [];

    protected get trueScope(): ActionScope {
        if (!this._trueScope) {
            this._trueScope = new ActionScope(this.actions);
            this._trueScope.id = `True${ this.id }`;
        }
        return this._trueScope;
    }

    protected get falseScope(): ActionScope {
        if (!this._falseScope) {
            this._falseScope = new ActionScope(this.elseActions);
            this._falseScope.id = `False${ this.id }`;
        }
        return this._falseScope;
    }

    /**
     * An optional expression which if is true will disable this action.
     */
    public disabled?: BoolExpression;

    private _trueScope: ActionScope;

    private _falseScope: ActionScope;

    public getDependencies(): Dialog[] {
        return [].concat(this.trueScope, this.falseScope);
    }

    public configure(config: IfConditionConfiguration): this {
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                const value = config[key];
                switch (key) {
                    case 'condition':
                        this.condition = new BoolExpression(value);
                        break;
                    case 'disabled':
                        this.disabled = new BoolExpression(value);
                        break;
                    default:
                        super.configure({ [key]: value });
                        break;
                }
            }
        }

        return this;
    }

    public async beginDialog(dc: DialogContext, options?: O): Promise<DialogTurnResult> {
        if (this.disabled && this.disabled.getValue(dc.state)) {
            return await dc.endDialog();
        }

        const conditionResult = this.condition.getValue(dc.state);
        if (conditionResult) {
            return await dc.replaceDialog(this.trueScope.id);
        } else if (!conditionResult && this.falseScope.actions && this.falseScope.actions.length > 0) {
            return await dc.replaceDialog(this.falseScope.id);
        }
        return await dc.endDialog();
    }

    protected onComputeId(): string {
        const label = this.condition ? this.condition.toString() : '';
        return `If[${ label }]`;
    }
}