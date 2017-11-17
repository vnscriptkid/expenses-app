import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { addExpense } from '../actions/expenses'; 

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        date: moment(),
        focused: false,
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (true) {
            this.setState(() => ({ amount }));
        }
    }    

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'You need to provide proper values descrition and amount'}));
        } else {            
            this.setState(() => ({
                description: '',
                note: '',
                amount: '',
                date: moment(),
                error: ''

            }))
            this.props.onSubmit({
                description: this.state.description, 
                note: this.state.note, 
                amount: parseFloat(this.state.amount), 
                createdAt: this.state.date.valueOf()
            });            
        }
    } 

    render() {
        return (
            <div>
                This is where you can add more expense
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="des"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    />
                    <textarea
                        placeholder="note something (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                    {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
                </form>
            </div>
        )
    }
}