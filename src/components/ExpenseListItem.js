import React from 'react';
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    return (
        <div>
            <p>{props.count} . {props.des}</p>
            <p> Amount {props.amount} - Created at {props.createdAt}</p>
            <button onClick={() => {
                // console.log(props);
                props.dispatch(removeExpense({id: props.id}))                
            }}>Remove</button>            
        </div>
    )
}

// export default ExpenseListItem;

const mapStateToProps = (state) => {
    
}

export default connect()(ExpenseListItem);