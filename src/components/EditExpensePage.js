import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    // console.log(props.match.params.id);
    return (
        <div>      
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>REMOVE EXPENSE</button>     
            <ExpenseForm 
                expense = {props.expense}
                onFormSubmit = {(expense) => {
                    props.dispatch(editExpense(
                        props.expense.id,
                        {
                            description: expense.description,
                            note: expense.note,
                            amount: expense.amount,
                            createdAt: expense.createdAt
                        }
                    ))
                    props.history.push('/');
                }}
            />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
// export default EditExpensePage;