import products from "../constants/products";
import moment from "moment";

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            const q = action.payload
            let data = []
            if (q.date) {
                products.forEach((item) => {
                    if (moment(item.date).format('L') === moment(q.date).format('L')) data.push(item)
                })
            }

            return { ... state, data: data }
        default:
            return state
    }
}
