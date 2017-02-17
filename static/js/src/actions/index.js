import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	LOAD_BANKNOTE,
	BUY_PRODUCT
} from '../constants/ActionTypes';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS
	});	

	axios.get('/api/products.json').then(products => {
		dispatch({
			type: FETCH_PRODUCTS_DONE,
			payload: products
		});
	});
};

export const loadBanknote = banknote => dispatch => {
	dispatch({
		type: LOAD_BANKNOTE,
		payload: banknote
	});	
};

export const buyProduct = id => dispatch => {
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});	
};
