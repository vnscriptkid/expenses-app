import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h2>ADD EXPENSE PAGE</h2>
        <ExpenseForm onFormSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');
            console.log(props.history);
            console.log(expense);
        }}/>
    </div>
)

export default connect()(AddExpensePage);
// export default AddExpensePage;
