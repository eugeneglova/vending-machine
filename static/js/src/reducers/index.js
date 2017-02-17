import { combineReducers } from 'redux';
import products from './products';
import balance from './balance';
import purchasedProducts from './purchasedProducts';

const rootReducer = combineReducers({
	products,
	balance,
	purchasedProducts
});

export default rootReducer;
