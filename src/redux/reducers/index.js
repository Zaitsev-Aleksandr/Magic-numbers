import {combineReducers} from "redux";
import  {descriptionReducer} from  "./headerReducer"
import {matrixReducer} from "./matixReducer";

export const rootReducer = combineReducers({
    description:descriptionReducer,
    matrix: matrixReducer
});