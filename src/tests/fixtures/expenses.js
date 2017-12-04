import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: moment(0).valueOf()
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 888888,
        createdAt: moment(0).subtract(3, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit card',
        note: '',
        amount: 2000,
        createdAt: moment(0).add(3, 'days').valueOf()
    }
]
