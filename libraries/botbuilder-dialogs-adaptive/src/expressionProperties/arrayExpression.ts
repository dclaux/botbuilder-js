/**
 * @module botbuilder-dialogs-adaptive
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ExpressionProperty } from './expressionProperty';

/**
 * ArrayExpression<T> - represents a property which is either a value of array of T or a string expression to bind to a array of T.
 * @remarks
 * String values are always interpreted as an expression, whether it has '=' prefix or not.
 */
export class ArrayExpression<T> extends ExpressionProperty<T[]> {
    public constructor(value?: T[] | string) {
        if (value == undefined || value == null) {
            super([]);
        } else {
            super(value);
        }
    }
}