import locations from "../constants/locations";

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_LOCATION':
            let data = []
            const query = action.payload
            if (query.keyword) {
                data = locations
            }
            return { ... state, data: data }
        default:
            return state
    }
}
