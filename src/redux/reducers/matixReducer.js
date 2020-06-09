import {createField} from '../../resources/js/createMatrix'

export const initialState = {};

export function matrixReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_MAGIC':
            return {
                row: action.payload.row,
                column: action.payload.column,
                adjoining: action.payload.adjoining,
                matrixArr: createField(action.payload.row, action.payload.column),
            };
        default:
            return state
    }
}