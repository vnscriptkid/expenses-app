import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
)

const decrementCount = ({decrementBy = 1} = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
)

const resetCount = () => (
    {
        type: 'RESET'
    }
)

const setCount = ({ count } = {}) => (
    {
        type: 'SET',
        count
    }
)

const store = createStore((state = {count : 0}, action) => {
    console.log('running');
    switch (action.type) {
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            } 
            
        case 'RESET': 
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.count
            }

        default: 
            return state;
    }
      
});

const unsubscribe = store.subscribe(() => {
    console.log(console.log(store.getState()));
})

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount({ incrementBy: 'abc' }));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 20}))

store.dispatch(setCount({count: 50}));
