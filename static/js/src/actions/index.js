import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	INCREMENT_BALLANCE,
	DECREMENT_BALLANCE,
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

export const incrementBallance = amount => dispatch => {
	dispatch({
		type: INCREMENT_BALLANCE,
		payload: amount
	});	
};

export const decrementBallance = amount => dispatch => {
	dispatch({
		type: DECREMENT_BALLANCE,
		payload: amount
	});	
};

export const buyProduct = id => (dispatch, getState) => {
	dispatch(decrementBallance(getState().products.data[id].price));
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});	
};
