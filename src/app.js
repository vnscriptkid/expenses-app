import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();
store.dispatch(addExpense({description: 'tuition fee'}));
store.dispatch(addExpense({description: 'renting house cost'}));
store.dispatch(addExpense({description: 'buying furniture cost'}));    

// setTimeout(() => {
//     store.dispatch(setTextFilter('cost'));
// }, 3000)

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));






