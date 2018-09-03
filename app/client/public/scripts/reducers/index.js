import { ADD_RESULTS } from "../actions/constants/action-types";

const initialState = {
    favs: [],
    results: [],
    lastSearch: []
}

const rootReducer = ( state=initialState, action ) => {
    switch(action.type) {
        case ADD_RESULTS:
            return {
                ...state,
                results: state.results.concat(action.results)
            }
        default:
            return state;
    }
};

export default rootReducer;