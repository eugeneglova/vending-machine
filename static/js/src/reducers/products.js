import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE
} from '../constants/ActionTypes';
import keyBy from 'lodash/keyBy';

const initialState = {
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {...state,
				loading: true
			};
			break;
		case FETCH_PRODUCTS_DONE:
			return {...state,
				loading: false,
				response: keyBy(action.payload.data, 'id')
			};
			break;
		default:
			return state;
	}
};

export default reducer;
