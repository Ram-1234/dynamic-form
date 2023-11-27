export const initialState = {
    text: {},
    textarea: {},
    radio: {},
    checkbox: {},
    button: {},
    dropdown: {}
}

export function reducer(state, action) {
    switch (action?.type) {
        case "TEXT":
            return { ...state, text: action?.payload };
        case "RADIO":
            return { ...state, radio: action.payload };
        default:
            return state;
    }
}