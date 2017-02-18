import {
	INCREMENT_BALANCE,
	INCREMENT_BALANCE_DONE,
	DECREMENT_BALANCE
} from '../constants/ActionTypes';

const initialState = {
	loading: false,
	value: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT_BALANCE:
		return {...state,
			loading: true
		};
	case INCREMENT_BALANCE_DONE:
		return {...state,
			loading: false,
			value: state.value + action.payload
		};
	case DECREMENT_BALANCE:
		return {...state,
			loading: false,
			value: state.value - action.payload
		};
	default:
		return state;
	}
};

export default reducer;
