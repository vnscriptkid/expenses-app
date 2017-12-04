import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onEditSubmit( expense ) {
        this.props.editExpense(
            this.props.expense.id,
            {
                description: expense.description,
                note: expense.note,
                amount: expense.amount,
                createdAt: expense.createdAt
            }
        )
        this.props.history.push('/');
    }

    onRemoveClick() {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button onClick={this.onRemoveClick}>REMOVE EXPENSE</button>
                <ExpenseForm
                    functionButton="EDIT EXPENSE"
                    expense={this.props.expense}
                    onFormSubmit={this.onEditSubmit}
                />
            </div>
        )
    }
}

// const EditExpensePage = (props) => {
//     return (
//         <div>      
//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//             }}>REMOVE EXPENSE</button>     
//             <ExpenseForm 
//                 expense = {props.expense}
//                 onFormSubmit = {(expense) => {
//                     props.dispatch(editExpense(
//                         props.expense.id,
//                         {
//                             description: expense.description,
//                             note: expense.note,
//                             amount: expense.amount,
//                             createdAt: expense.createdAt
//                         }
//                     ))
//                     props.history.push('/');
//                 }}
//             />
//         </div>
//     )
// }


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, updates) => dispatch(editExpense(id, updates)),
    removeExpense: ( idObject ) => dispatch(startRemoveExpense( idObject ))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
// export default EditExpensePage;