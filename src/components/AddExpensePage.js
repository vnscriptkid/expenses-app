import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>ADD EXPENSE PAGE</h2>
                <ExpenseForm 
                    onFormSubmit={this.onSubmit}
                    functionButton="ADD EXPENSE"
                />
            </div>
        )
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h2>ADD EXPENSE PAGE</h2>
//         <ExpenseForm onFormSubmit={(expense) => {
//             // props.dispatch(addExpense(expense));
//             props.onSubmit(expense);
//             props.history.push('/');
//         }} />
//     </div>
// )

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

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

