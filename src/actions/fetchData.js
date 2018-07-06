import { FETCH_DATA } from "./action-types";
import axios from 'axios';

export const fetchData = () => {
	return function(dispatch) {
		dispatch({ type: "FETCH_DATA_STARTED" })
		axios.get('https://api.spacexdata.com/v2/launches')
			.then((response) => {
				dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
			})
			.catch((err)=>{
				dispatch({type: "FETCH_DATA_REJECTED", payload: err})
			});
	}
};