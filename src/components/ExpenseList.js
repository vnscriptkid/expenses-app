import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import ExpensesSelect from '../selectors/expenses';

const ExpenseList = (props) => {      
    return (
        <div>
            <h3>Expense List</h3>
            <p>There are {props.expenses.length} item(s) in the expense list</p>
            {props.expenses.map((expense, index) => (                
                <ExpenseListItem id={expense.id} key={expense.id} count={index+1} des={expense.description}/>
            ))}                  
        </div>
    );
} 

const mapStateToProps = (state) => {
    // console.log(state.expenses);
    // console.log(state.filters);
    return {
        expenses: ExpensesSelect(state.expenses, state.filters) 
    }
}

// export default ExpenseList;
export default connect(mapStateToProps)(ExpenseList);