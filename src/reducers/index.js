import { combineReducers } from 'redux';

let initialState = {
  launch: 'date',
  launchSite: 'site',
  error: null,
  fetched: false,
  id: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
	case "FETCH_DATA":
	  {
		return { ...state,
		  fetching: true
		}
	  }
	case "DATA_RECEIVED":
	  {
		return {
		  ...state,
		  fetching: false,
		  fetched: true,
		  launches: action.payload,
		  launch: action.payload[1],

		}
	  }
	case "DATA_REJECTED":
	  {
		return {
		  ...state,
		  error: action.payload.err
		}
	  }
	case "SHOW_LIST":
		{
			return {
				...state,
				viewName: 'list'
			}
		}
	case "SHOW_DETAILS":
		{
			return {
				...state,
				viewName: action.payload[0],
				launch: state.launches[action.payload[1]-1]
			}
		}

	default:
	  {
		return state;
	  }

  }
}


// const reducer = combineReducers({data:dataReducer, view:viewReducer});

export default reducer
