import {START_MAGIC, TOGGLE_MODAL, UP_AMOUNT, DELETE_ROW,ADD_ROW} from "./types";

export const toggleInfo = () => ({ type: TOGGLE_MODAL });

export const takeInputValue = value => ({ type: START_MAGIC, payload: value });
export const upRowAmount = (x,y) => ({ type: UP_AMOUNT, payload: {x:x,y:y}  });
export const deleteRow = value => ({ type:  DELETE_ROW, payload: value  });
export const addRow = value => ({ type: ADD_ROW, payload: value  });