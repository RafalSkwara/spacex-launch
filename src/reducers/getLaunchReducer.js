import { GET_LAUNCH } from "../actions/action-types";

export const getLaunchReducer = (state = {
	fetching: false,
	fetched: false,
	launches: {},
	launch: '',
}, action) => {
	switch (action.type) {
		case GET_LAUNCH:
			return {
				...state, 
				launch: action.payload
			};
		default:
			return state;
	}
};

