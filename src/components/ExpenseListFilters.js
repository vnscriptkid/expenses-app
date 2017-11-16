import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.filters.startDate,
            endDate: this.props.filters.endDate,
            focusedInput: null
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />

                <select onChange={(e) => {                    
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
        
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

// export default ExpenseListFilters;
export default connect(mapStateToProps)(ExpenseListFilters);