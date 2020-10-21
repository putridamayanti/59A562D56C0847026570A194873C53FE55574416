import moment from "moment"

const products = [
    {
        date: moment(),
        data: [
            {
                name: 'Steak 1',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
                category: 0,
                price: 85000,
                rating: 3.5,
            },
            {
                name: 'Burger 1',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80',
                category: 0,
                price: 25000,
                rating: 4,
            },
            {
                name: 'Steak 2',
                image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                category: 1,
                price: 76000,
                rating: 4.5,
            },
            {
                name: 'Drink 1',
                image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                category: 1,
                price: 15000,
                rating: 2.5,
            }
        ]
    },
    {
        date: moment().add(1, 'd'),
        data: [
            {
                name: 'Pasta 1',
                image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                category: 0,
                price: 45000,
                rating: 4.5,
            },
            {
                name: 'Ice cream 1',
                image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                category: 0,
                price: 20000,
                rating: 3.5,
            },
            {
                name: 'Steak 2',
                image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                category: 1,
                price: 75000,
                rating: 3.5,
            },
            {
                name: 'Drink 1',
                image: 'https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                category: 1,
                price: 10000,
                rating: 2.5,
            }
        ]
    },
    {
        date: moment().add(2, 'd'),
        data: [
            {
                name: 'Burger 1',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80',
                category: 0,
                price: 25000,
                rating: 2.5,
            },
            {
                name: 'Ice cream 1',
                image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                category: 1,
                price: 17000,
                rating: 2.5,
            }
        ]
    }
]

export default products
