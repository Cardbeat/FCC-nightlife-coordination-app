const ADD_RESULTS = "ADD_RESULTS";
const ADD_FAVS = "ADD_FAVS";

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
                results: action.results
            }
        case ADD_FAVS:
            return {
                ...state,
                favs: action.favs
            }
        default:
            return state;
    }
};

export default rootReducer;