import axios from 'axios';

export function fetchLaunchData() {
    return function(dispatch) {
        dispatch({type: 'FETCH_DATA'});

        axios('https://api.spacexdata.com/v2/launches/upcoming')
            .then((response)=> {
                dispatch({type: 'DATA_RECEIVED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'DATA_REJECTED', payload: err});
            });

    }
}