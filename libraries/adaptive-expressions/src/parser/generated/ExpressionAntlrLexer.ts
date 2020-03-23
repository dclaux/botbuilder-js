// Generated from ../ExpressionAntlrLexer.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ExpressionAntlrLexer extends Lexer {
	public static readonly PLUS = 1;
	public static readonly SUBSTRACT = 2;
	public static readonly NON = 3;
	public static readonly XOR = 4;
	public static readonly ASTERISK = 5;
	public static readonly SLASH = 6;
	public static readonly PERCENT = 7;
	public static readonly DOUBLE_EQUAL = 8;
	public static readonly NOT_EQUAL = 9;
	public static readonly SINGLE_AND = 10;
	public static readonly DOUBLE_AND = 11;
	public static readonly DOUBLE_VERTICAL_CYLINDER = 12;
	public static readonly LESS_THAN = 13;
	public static readonly MORE_THAN = 14;
	public static readonly LESS_OR_EQUAl = 15;
	public static readonly MORE_OR_EQUAL = 16;
	public static readonly OPEN_BRACKET = 17;
	public static readonly CLOSE_BRACKET = 18;
	public static readonly DOT = 19;
	public static readonly OPEN_SQUARE_BRACKET = 20;
	public static readonly CLOSE_SQUARE_BRACKET = 21;
	public static readonly OPEN_CURLY_BRACKET = 22;
	public static readonly CLOSE_CURLY_BRACKET = 23;
	public static readonly COMMA = 24;
	public static readonly COLON = 25;
	public static readonly DOLLAR = 26;
	public static readonly NUMBER = 27;
	public static readonly WHITESPACE = 28;
	public static readonly IDENTIFIER = 29;
	public static readonly NEWLINE = 30;
	public static readonly STRING = 31;
	public static readonly INVALID_TOKEN_DEFAULT_MODE = 32;
	public static readonly STRING_INTERPOLATION = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LETTER", "DIGIT", "PLUS", "SUBSTRACT", "NON", "XOR", "ASTERISK", "SLASH", 
		"PERCENT", "DOUBLE_EQUAL", "NOT_EQUAL", "SINGLE_AND", "DOUBLE_AND", "DOUBLE_VERTICAL_CYLINDER", 
		"LESS_THAN", "MORE_THAN", "LESS_OR_EQUAl", "MORE_OR_EQUAL", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "DOT", "OPEN_SQUARE_BRACKET", "CLOSE_SQUARE_BRACKET", 
		"OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "COMMA", "COLON", "DOLLAR", 
		"NUMBER", "WHITESPACE", "IDENTIFIER", "NEWLINE", "STRING", "INVALID_TOKEN_DEFAULT_MODE", 
		"STRING_INTERPOLATION",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'!'", "'^'", "'*'", "'/'", "'%'", "'=='", undefined, 
		"'&'", "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='", "'('", "')'", "'.'", 
		"'['", "']'", "'{'", "'}'", "','", "':'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PLUS", "SUBSTRACT", "NON", "XOR", "ASTERISK", "SLASH", "PERCENT", 
		"DOUBLE_EQUAL", "NOT_EQUAL", "SINGLE_AND", "DOUBLE_AND", "DOUBLE_VERTICAL_CYLINDER", 
		"LESS_THAN", "MORE_THAN", "LESS_OR_EQUAl", "MORE_OR_EQUAL", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "DOT", "OPEN_SQUARE_BRACKET", "CLOSE_SQUARE_BRACKET", 
		"OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "COMMA", "COLON", "DOLLAR", 
		"NUMBER", "WHITESPACE", "IDENTIFIER", "NEWLINE", "STRING", "INVALID_TOKEN_DEFAULT_MODE", 
		"STRING_INTERPOLATION",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionAntlrLexer._LITERAL_NAMES, ExpressionAntlrLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionAntlrLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	  ignoreWS = true;      // usually we ignore whitespace, but inside stringInterpolation, whitespace is significant


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExpressionAntlrLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ExpressionAntlrLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionAntlrLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionAntlrLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return ExpressionAntlrLexer.modeNames; }

	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.WHITESPACE_sempred(_localctx, predIndex);
		}
		return true;
	}
	private WHITESPACE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.ignoreWS;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02#\xD1\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\fc\n\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1E\x06\x1E\x8C\n\x1E\r\x1E\x0E\x1E\x8D\x03\x1E\x03\x1E\x06\x1E\x92\n" +
		"\x1E\r\x1E\x0E\x1E\x93\x05\x1E\x96\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \xA2\n \x03 \x03 \x03 \x07 \xA7" +
		"\n \f \x0E \xAA\v \x03!\x05!\xAD\n!\x03!\x03!\x03!\x03!\x03\"\x03\"\x07" +
		"\"\xB5\n\"\f\"\x0E\"\xB8\v\"\x03\"\x03\"\x03\"\x07\"\xBD\n\"\f\"\x0E\"" +
		"\xC0\v\"\x03\"\x05\"\xC3\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x07$\xCB\n" +
		"$\f$\x0E$\xCE\v$\x03$\x03$\x02\x02\x02%\x03\x02\x02\x05\x02\x02\x07\x02" +
		"\x03\t\x02\x04\v\x02\x05\r\x02\x06\x0F\x02\x07\x11\x02\b\x13\x02\t\x15" +
		"\x02\n\x17\x02\v\x19\x02\f\x1B\x02\r\x1D\x02\x0E\x1F\x02\x0F!\x02\x10" +
		"#\x02\x11%\x02\x12\'\x02\x13)\x02\x14+\x02\x15-\x02\x16/\x02\x171\x02" +
		"\x183\x02\x195\x02\x1A7\x02\x1B9\x02\x1C;\x02\x1D=\x02\x1E?\x02\x1FA\x02" +
		" C\x02!E\x02\"G\x02#\x03\x02\n\x04\x02C\\c|\x03\x022;\x06\x02\v\v\"\"" +
		"\xA2\xA2\uFF01\uFF01\x05\x02%%BBaa\x04\x02//aa\x03\x02))\x03\x02$$\x03" +
		"\x02bb\xDE\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x03I\x03\x02\x02\x02\x05K\x03\x02\x02\x02\x07" +
		"M\x03\x02\x02\x02\tO\x03\x02\x02\x02\vQ\x03\x02\x02\x02\rS\x03\x02\x02" +
		"\x02\x0FU\x03\x02\x02\x02\x11W\x03\x02\x02\x02\x13Y\x03\x02\x02\x02\x15" +
		"[\x03\x02\x02\x02\x17b\x03\x02\x02\x02\x19d\x03\x02\x02\x02\x1Bf\x03\x02" +
		"\x02\x02\x1Di\x03\x02\x02\x02\x1Fl\x03\x02\x02\x02!n\x03\x02\x02\x02#" +
		"p\x03\x02\x02\x02%s\x03\x02\x02\x02\'v\x03\x02\x02\x02)x\x03\x02\x02\x02" +
		"+z\x03\x02\x02\x02-|\x03\x02\x02\x02/~\x03\x02\x02\x021\x80\x03\x02\x02" +
		"\x023\x82\x03\x02\x02\x025\x84\x03\x02\x02\x027\x86\x03\x02\x02\x029\x88" +
		"\x03\x02\x02\x02;\x8B\x03\x02\x02\x02=\x97\x03\x02\x02\x02?\xA1\x03\x02" +
		"\x02\x02A\xAC\x03\x02\x02\x02C\xC2\x03\x02\x02\x02E\xC4\x03\x02\x02\x02" +
		"G\xC6\x03\x02\x02\x02IJ\t\x02\x02\x02J\x04\x03\x02\x02\x02KL\t\x03\x02" +
		"\x02L\x06\x03\x02\x02\x02MN\x07-\x02\x02N\b\x03\x02\x02\x02OP\x07/\x02" +
		"\x02P\n\x03\x02\x02\x02QR\x07#\x02\x02R\f\x03\x02\x02\x02ST\x07`\x02\x02" +
		"T\x0E\x03\x02\x02\x02UV\x07,\x02\x02V\x10\x03\x02\x02\x02WX\x071\x02\x02" +
		"X\x12\x03\x02\x02\x02YZ\x07\'\x02\x02Z\x14\x03\x02\x02\x02[\\\x07?\x02" +
		"\x02\\]\x07?\x02\x02]\x16\x03\x02\x02\x02^_\x07#\x02\x02_c\x07?\x02\x02" +
		"`a\x07>\x02\x02ac\x07@\x02\x02b^\x03\x02\x02\x02b`\x03\x02\x02\x02c\x18" +
		"\x03\x02\x02\x02de\x07(\x02\x02e\x1A\x03\x02\x02\x02fg\x07(\x02\x02gh" +
		"\x07(\x02\x02h\x1C\x03\x02\x02\x02ij\x07~\x02\x02jk\x07~\x02\x02k\x1E" +
		"\x03\x02\x02\x02lm\x07>\x02\x02m \x03\x02\x02\x02no\x07@\x02\x02o\"\x03" +
		"\x02\x02\x02pq\x07>\x02\x02qr\x07?\x02\x02r$\x03\x02\x02\x02st\x07@\x02" +
		"\x02tu\x07?\x02\x02u&\x03\x02\x02\x02vw\x07*\x02\x02w(\x03\x02\x02\x02" +
		"xy\x07+\x02\x02y*\x03\x02\x02\x02z{\x070\x02\x02{,\x03\x02\x02\x02|}\x07" +
		"]\x02\x02}.\x03\x02\x02\x02~\x7F\x07_\x02\x02\x7F0\x03\x02\x02\x02\x80" +
		"\x81\x07}\x02\x02\x812\x03\x02\x02\x02\x82\x83\x07\x7F\x02\x02\x834\x03" +
		"\x02\x02\x02\x84\x85\x07.\x02\x02\x856\x03\x02\x02\x02\x86\x87\x07<\x02" +
		"\x02\x878\x03\x02\x02\x02\x88\x89\x07&\x02\x02\x89:\x03\x02\x02\x02\x8A" +
		"\x8C\x05\x05\x03\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
		"\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x95\x03\x02\x02\x02\x8F" +
		"\x91\x070\x02\x02\x90\x92\x05\x05\x03\x02\x91\x90\x03\x02\x02\x02\x92" +
		"\x93\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
		"\x96\x03\x02\x02\x02\x95\x8F\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96" +
		"<\x03\x02\x02\x02\x97\x98\t\x04\x02\x02\x98\x99\x06\x1F\x02\x02\x99\x9A" +
		"\x03\x02\x02\x02\x9A\x9B\b\x1F\x02\x02\x9B>\x03\x02\x02\x02\x9C\xA2\x05" +
		"\x03\x02\x02\x9D\xA2\t\x05\x02\x02\x9E\x9F\x07B\x02\x02\x9F\xA2\x07B\x02" +
		"\x02\xA0\xA2\x04&\'\x02\xA1\x9C\x03\x02\x02\x02\xA1\x9D\x03\x02\x02\x02" +
		"\xA1\x9E\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\xA8\x03\x02\x02\x02" +
		"\xA3\xA7\x05\x03\x02\x02\xA4\xA7\x05\x05\x03\x02\xA5\xA7\t\x06\x02\x02" +
		"\xA6\xA3\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA5\x03\x02\x02\x02" +
		"\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02" +
		"\xA9@\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAD\x07\x0F\x02\x02" +
		"\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02" +
		"\xAE\xAF\x07\f\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\b!\x02\x02\xB1" +
		"B\x03\x02\x02\x02\xB2\xB6\x07)\x02\x02\xB3\xB5\n\x07\x02\x02\xB4\xB3\x03" +
		"\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xC3\x07" +
		")\x02\x02\xBA\xBE\x07$\x02\x02\xBB\xBD\n\b\x02\x02\xBC\xBB\x03\x02\x02" +
		"\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02" +
		"\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC3\x07$\x02" +
		"\x02\xC2\xB2\x03\x02\x02\x02\xC2\xBA\x03\x02\x02\x02\xC3D\x03\x02\x02" +
		"\x02\xC4\xC5\v\x02\x02\x02\xC5F\x03\x02\x02\x02\xC6\xCC\x07b\x02\x02\xC7" +
		"\xC8\x07^\x02\x02\xC8\xCB\x07b\x02\x02\xC9\xCB\n\t\x02\x02\xCA\xC7\x03" +
		"\x02\x02\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03" +
		"\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xCC\x03" +
		"\x02\x02\x02\xCF\xD0\x07b\x02\x02\xD0H\x03\x02\x02\x02\x10\x02b\x8D\x93" +
		"\x95\xA1\xA6\xA8\xAC\xB6\xBE\xC2\xCA\xCC\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionAntlrLexer.__ATN) {
			ExpressionAntlrLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionAntlrLexer._serializedATN));
		}

		return ExpressionAntlrLexer.__ATN;
	}

}

