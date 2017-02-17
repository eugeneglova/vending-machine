import { combineReducers } from 'redux';
import products from './products';
import ballance from './ballance';
import purchasedProducts from './purchasedProducts';

const rootReducer = combineReducers({
	products,
	ballance,
	purchasedProducts
});

export default rootReducer;
