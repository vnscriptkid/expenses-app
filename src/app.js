import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense, startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
// import './playground/promises';

const store = configureStore();
store.dispatch(startSetExpenses());

console.log('test');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<div> loading...</div>, document.getElementById('root'));

ReactDOM.render(jsx, document.getElementById('root'));






