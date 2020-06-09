import {createField, addField} from '../../resources/js/createMatrix'
import {START_MAGIC, UP_AMOUNT, DELETE_ROW, ADD_ROW} from "../actions/types";

export const initialState = {};

export function matrixReducer(state = initialState, action) {
    switch (action.type) {
        case START_MAGIC:
            return {
                ...state,
                row: action.payload.row,
                column: action.payload.column,
                adjoining: action.payload.adjoining,
                matrixArr: createField(action.payload.row, action.payload.column),
            };
        case UP_AMOUNT: {
            console.log(action.payload);
            const matrixArr = [...state.matrixArr];
            const matrixArrRow = [...matrixArr[action.payload.x]];
            const item = {...matrixArrRow[action.payload.y]};
            item.amount = item.amount + 1;
            matrixArrRow[action.payload.y] = item;
            matrixArr[action.payload.x] = matrixArrRow;
            return {
                ...state,
                matrixArr
            }
        }
        case DELETE_ROW: {
            if (state.matrixArr.length > 1) {
                const matrixArr = [...state.matrixArr];
                matrixArr.splice(action.payload, 1);
                return {
                    ...state,
                    matrixArr
                }
            } else {
                return {
                    initialState
                }
            }
        }
        case ADD_ROW: {
            const matrixArr = [...state.matrixArr];
            matrixArr.push(addField(state.matrixArr, state.column));
            return {
                ...state,
                matrixArr
            }
        }
        default:
            return state
    }
}