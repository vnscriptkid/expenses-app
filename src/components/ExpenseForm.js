import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            error: '',
            date: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false
        }
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange(e) {
        const amount = e.target.value;
        this.setState(() => ({ amount }));
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (this.state.description && parseFloat(this.state.amount) > 0) {
            this.props.onFormSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note: this.state.note,
                createdAt: this.state.date.valueOf()               
            })
            this.setState(() => ({
                error: '',
                description: '',
                amount: '',
                note: ''
            }))
        } else {
            this.setState(() => ({ error: 'You need to provide proper values for description and amount' }))
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <textarea
                    placeholder="Note something"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <SingleDatePicker
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <br />
                <button>Add Expense</button>
                {this.state.error && <h3 style={{ color: 'red' }}>{this.state.error}</h3>}
            </form>
        )
    }
}
