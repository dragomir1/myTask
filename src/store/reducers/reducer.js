import * as actionTypes from '../actions/actions'

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREASE_COUNTER:
            if (state.counter <= 0) {

            }
            return {
                ...state,
                counter: state.counter - 1
            }
    }
    return state;
}


export default reducer;
