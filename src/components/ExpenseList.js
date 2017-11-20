import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import ExpensesSelect from '../selectors/expenses';

export const ExpenseList = (props) => {      
    return (
        <div>
            <h3>Expense List</h3>
            { 
                props.expenses.length > 0 ? (
                    <p>There are {props.expenses.length} item(s) in the expense list</p>,
                    props.expenses.map((expense, index) => (                
                        <ExpenseListItem 
                            id={expense.id} 
                            key={expense.id} 
                            count={index+1} 
                            {...expense}
                        />
                    ))
                ) : (
                    <h4>There is no a single one Expense</h4>
                )
            }                                   
        </div>
    );
} 

const mapStateToProps = (state) => {    
    return {
        expenses: ExpensesSelect(state.expenses, state.filters) 
    }
}

// export default ExpenseList;
export default connect(mapStateToProps)(ExpenseList);