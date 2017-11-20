import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
// import { startAddExpense } from '../actions/expenses';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h2>ADD EXPENSE PAGE</h2>
        <ExpenseForm onFormSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');            
        }}/>
    </div>
)

export default connect()(AddExpensePage);

// const AddExpensePage = (props) => (
//     <div>
//         <h2>ADD EXPENSE PAGE</h2>
//         <ExpenseForm onFormSubmit={(expense) => {
//             props.startAddExpense(expense);
//             props.history.push('/');            
//         }}/>
//     </div>
// )

// const mapDispatchToProps = (dispatch) => ({
//     startAddExpense: (expense) => dispatch(startAddExpense(expense))
// })

// export default connect(undefined, mapDispatchToProps)(AddExpensePage);

