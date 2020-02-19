/**
 * @module botbuilder-dialogs-adaptive
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { DialogTurnResult, Dialog, DialogContext } from 'botbuilder-dialogs';
import { ActionScope, ActionScopeResult, ActionScopeConfiguration } from './actionScope';
import { StringExpression, BoolExpression } from '../expressionProperties';

const INDEX = 'dialog.foreach.index';
const VALUE = 'dialog.foreach.value';

/**
 * Configuration info passed to a `ForEach` action.
 */
export interface ForEachConfiguration extends ActionScopeConfiguration {
    itemsProperty?: string;
    disabled?: string | boolean;
}

export class ForEach<O extends object = {}> extends ActionScope<O> {
    public static declarativeType = 'Microsoft.Foreach';

    public constructor();
    public constructor(itemsProperty: string, actions: Dialog[]);
    public constructor(itemsProperty?: string, actions?: Dialog[]) {
        super();
        if (itemsProperty) { this.itemsProperty = new StringExpression(itemsProperty); }
        if (actions) { this.actions = actions; }
    }

    /**
     * Property path expression to the collection of items.
     */
    public itemsProperty: StringExpression;

    /**
     * An optional expression which if is true will disable this action.
     */
    public disabled?: BoolExpression;

    public getDependencies(): Dialog[] {
        return this.actions;
    }

    public configure(config: ForEachConfiguration): this {
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                const value = config[key];
                switch (key) {
                    case 'itemsProperty':
                        this.itemsProperty = new StringExpression(value);
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
        dc.state.setValue(INDEX, -1);
        return await this.nextItem(dc);
    }

    protected async onBreakLoop(dc: DialogContext, actionScopeResult: ActionScopeResult): Promise<DialogTurnResult> {
        return await dc.endDialog();
    }

    protected async onContinueLoop(dc: DialogContext, actionScopeResult: ActionScopeResult): Promise<DialogTurnResult> {
        return await this.nextItem(dc);
    }

    protected async onEndOfActions(dc: DialogContext, result?: any): Promise<DialogTurnResult> {
        return await this.nextItem(dc);
    }

    protected async nextItem(dc: DialogContext): Promise<DialogTurnResult> {
        const itemsProperty = this.itemsProperty.getValue(dc.state);
        const items: any[] = dc.state.getValue(itemsProperty, []);
        let index = dc.state.getValue(INDEX);

        if (++index < items.length) {
            dc.state.setValue(VALUE, items[index]);
            dc.state.setValue(INDEX, index);
            return await this.beginAction(dc, 0);
        } else {
            return await dc.endDialog();
        }
    }

    protected onComputeId(): string {
        return `ForEach[${ this.itemsProperty.toString() }]`;
    }

}
