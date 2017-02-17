import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	BUY_PRODUCT
} from '../constants/ActionTypes';
import keyBy from 'lodash/keyBy';

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_PRODUCTS:
		return {...state,
			loading: true
		};
	case FETCH_PRODUCTS_DONE:
		return {...state,
			loading: false,
			data: keyBy(action.payload.data, 'id')
		};
	case BUY_PRODUCT:
		return {...state,
			data: {...state.data,
				[action.payload]: {...state.data[action.payload],
					count: state.data[action.payload].count - 1
				}
			}
		};
	default:
		return state;
	}
};

export default reducer;
