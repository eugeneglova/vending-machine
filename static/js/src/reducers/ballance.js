import {
	LOAD_BANKNOTE
} from '../constants/ActionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BANKNOTE:
			return state + action.payload
			break;
		default:
			return state;
	}
};

export default reducer;
