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
                launch: action.payload[0]['launch_date_unix'],
                launchSite: action.payload[0]['launch_site']['site_name_long'],
                rocket: action.payload[0].rocket['rocket_name'],
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
