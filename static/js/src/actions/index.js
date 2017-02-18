import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	INCREMENT_BALANCE,
	DECREMENT_BALANCE,
	BUY_PRODUCT,
	BUY_PRODUCT_DONE
} from '../constants/ActionTypes';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS
	});	

	axios.get('api/products.json').then(products => {
		dispatch({
			type: FETCH_PRODUCTS_DONE,
			payload: products
		});
	});
};

export const incrementBalance = amount => dispatch => {
	dispatch({
		type: INCREMENT_BALANCE,
		payload: amount
	});	
};

export const decrementBalance = amount => dispatch => {
	dispatch({
		type: DECREMENT_BALANCE,
		payload: amount
	});	
};

export const buyProduct = id => (dispatch, getState) => {
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});	

	// emulate rest API to buy product and catch error as API isn't implemented
	axios.put(`api/products/${id}`).catch(() => {
		// actually we should do this on backend
		dispatch(decrementBalance(getState().products.data[id].price));

		dispatch({
			type: BUY_PRODUCT_DONE,
			payload: id
		});	
	});
};
