import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
    return (
        <div>
            <h3>ADD EXPENSE PAGE</h3>
            <ExpenseForm onSubmit={(expense) => {
                // console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}/>        
        </div>
    )
}

// export default AddExpensePage;
export default connect()(AddExpensePage);