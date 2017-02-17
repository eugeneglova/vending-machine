import { combineReducers } from 'redux';
import products from './products';
import ballance from './ballance';

const rootReducer = combineReducers({
	products,
	ballance
});

export default rootReducer;
