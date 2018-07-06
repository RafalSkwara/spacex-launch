export const fetchDataReducer = (state = {
	fetching: false,
	fetched: false,
	launches: {},
	launch: '',
}, action) => {
	switch (action.type) {
		case 'FETCH_DATA_STARTED':
			return {
				...state,
				fetching: true
			}
		case 'FETCH_DATA_FULFILLED':
			return {
				...state,
				fetching: false,
				fetched: true,
				launches: action.payload
			}
		case 'FETCH_DATA_REJECTED':
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
		default:
			return state;
	}
};
