import {
	BUY_PRODUCT
} from '../constants/ActionTypes';

const initialState = [
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PRODUCT:
			return [...state,
				action.payload
			];
			break;
		default:
			return state;
	}
};

export default reducer;
