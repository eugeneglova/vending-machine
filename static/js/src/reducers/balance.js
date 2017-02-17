import {
	INCREMENT_BALANCE,
	DECREMENT_BALANCE
} from '../constants/ActionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT_BALANCE:
		return state + action.payload;
	case DECREMENT_BALANCE:
		return state - action.payload;
	default:
		return state;
	}
};

export default reducer;
