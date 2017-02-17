import {
	INCREMENT_BALLANCE,
	DECREMENT_BALLANCE
} from '../constants/ActionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_BALLANCE:
			return state + action.payload
			break;
		case DECREMENT_BALLANCE:
			return state - action.payload
			break;
		default:
			return state;
	}
};

export default reducer;
