import React from 'react';
import getTotalExpenses from '../selectors/expenses-total';
import expensesSelected from '../selectors/expenses';
import { connect } from 'react-redux';

export class ExpensesSummary extends React.Component {
    render() {
        const expenseWord = this.props.countExpenses <= 1 ? 'expense' : 'expenses';
        return (
            <div>
                <p>There are {this.props.countExpenses} {expenseWord} visible </p>
                <p>The total are {this.props.totalExpenses}</p>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelected(state.expenses, state.filters);
    return {
        countExpenses: visibleExpenses.length,
        totalExpenses: getTotalExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);