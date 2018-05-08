export default function reducer(state = {
    launch: 'date',
    launchSite: 'site',
    rocket: 'rocket',
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, fetching: true }
        }
        case "DATA_RECEIVED": {
            return {  
                fetching: false,
                launch: action.payload[0],
                launchSite: action.payload[0]['launch_site'],
                rocket: action.payload[0].rocket,
            }
        }
        case "DATA_REJECTED": {
            return {
                ...state,
                error: action.payload.err
            }
        }
    }

    return state
}
