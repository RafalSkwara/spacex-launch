import axios from 'axios';

export function fetchLaunchData() {
    return function(dispatch) {
        dispatch({type: 'FETCH_DATA'});

        axios('https://api.spacexdata.com/v2/launches/')
            .then((response)=> {
                dispatch({type: 'DATA_RECEIVED', payload: response.data})
            }).then(()=>{
				dispatch({
					type: "SHOW_LIST",
					payload: 'list'
				});
			})
            .catch((err) => {
                dispatch({type: 'DATA_REJECTED', payload: err});
            });

    };
};

export function showList() {
	return {
		type: "SHOW_LIST",
		payload: 'list'
	};
}
export function showDetails(id) {
	return {
		type: "SHOW_DETAILS",
		payload: ['details', id]
	};
}