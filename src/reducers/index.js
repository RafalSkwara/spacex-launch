export default function reducer(state = {
    launch: 'date',
    launchSite: 'site',
    rocket: {
        'second_stage': {
            0: [
                'payloads':
                    {   
                        0: [1,2,],
                        1: [1,2,]
                    }
                ]
            }
    },
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, fetching: true }
        }
        case "DATA_RECEIVED": {
            return {  
                fetching: false,
                launch: action.payload[1],
                launchSite: action.payload[1]['launch_site'],
                rocket: action.payload[1].rocket,
            }
        }
        case "DATA_REJECTED": {
            return {
                ...state,
                error: action.payload.err
            }
        }
        default: {
            return state;
        }

    }
}
