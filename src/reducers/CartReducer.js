const initialState = {
    items: [],
    qty: 0,
    total: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            let items = state.items
            const query = action.payload
            if (query.item) {
                items = [...items, query.item]
            }
            const qty = items.length
            const total = items.reduce((prev,next) => prev + next.price,0);
            return { ... state, items: items, qty: qty, total: total }
        default:
            return state
    }
}
