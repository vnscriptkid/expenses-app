import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import { connect } from 'react-redux';

export const Dashboard = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
)

export default Dashboard;