import {
	INCREMENT_BALLANCE,
	DECREMENT_BALLANCE
} from '../constants/ActionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT_BALLANCE:
		return state + action.payload;
	case DECREMENT_BALLANCE:
		return state - action.payload;
	default:
		return state;
	}
};

export default reducer;
