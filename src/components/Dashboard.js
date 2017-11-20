import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';

export const Dashboard = (props) => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard;