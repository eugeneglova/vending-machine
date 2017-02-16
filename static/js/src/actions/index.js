import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE
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
