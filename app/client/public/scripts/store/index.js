import { createStore } from 'redux';
// reducer path
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;