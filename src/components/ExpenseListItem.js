import React from 'react';
// import {connect} from 'react-redux';
// import { removeExpense } from '../actions/expenses';
import numeral from 'numeral';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt, count }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3 style={{color: 'green'}}>{description}</h3>
            </Link>
            <p>{count} . {description}</p>
            <p> Amount {amount} - Created at {moment(createdAt).format('MMM DD YYYY')}</p>                               
        </div>
    )
}

// export default connect()(ExpenseListItem);
export default ExpenseListItem;
