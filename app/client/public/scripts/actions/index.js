import { ADD_RESULTS } from './constants/action-types';

export const addFavorite = results => ({ 
    type: ADD_RESULTS , 
    results: results 
});
