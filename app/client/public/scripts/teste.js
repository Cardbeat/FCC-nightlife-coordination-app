import store from './store/index';
import { addResults } from './actions/addResults';
import { addFavs } from './actions/addFavs';

window.store = store;
window.addResults = addResults;
window.addUser = addFavs;