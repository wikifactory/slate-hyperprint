// @flow
import type { Editor, Decoration, Mark } from 'slate';
import type { SlateModel } from './types';

/**
 * Checks is mark type is decoration in real
 *
 * @param {Mark} mark
 * @returns {boolean}
 */
export const isDecorationMark = (mark: Mark): boolean =>
    mark.object === 'mark' && /__@.+@__/.test(mark.type);

/**
 * Returns model type
 *
 * @param {SlateModel} model
 * @returns {string}
 */
export const getModelType = (model: SlateModel): string =>
    isDecorationMark(model)
        ? model.type.replace(/__@(.+)@__/, '$1')
        : model.type;

/**
 * Applies decoration marks
 *
 * The easiest way to print decoration tags is by applying decoration marks to slate document.
 * To identify marks which are decorations in real while printing tags, mark type is wrapped intentionally.
 * @param {Editor} editor
 * @returns {Editor}
 */
export const applyDecorationMarks = (editor: Editor): Editor => {
    const { value } = editor;
    editor.withoutNormalizing(() => {
        value.decorations.forEach((decoration: Decoration) => {
            editor.addMarkAtRange(decoration, {
                ...decoration.mark.toJSON(),
                type: `__@${decoration.mark.type}@__`
            });
        });
    });
    return editor;
};
