import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
// import './playground/promises';

const store = configureStore();
store.dispatch(addExpense({description: 'tuition fee', amount:100, createdAt:500}));
store.dispatch(addExpense({description: 'renting house cost', amount:200, createdAt:300}));
store.dispatch(addExpense({description: 'buying furniture cost', amount:300, createdAt:100}));    

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






