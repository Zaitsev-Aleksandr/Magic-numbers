const initialState = {
    description: false,
};
export function descriptionReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return { description: !state.description,};
          default:
            return state
    }
}
