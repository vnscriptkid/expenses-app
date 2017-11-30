import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onTextChange(e) {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange(e) {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    onDatesChange({startDate, endDate}) {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange(focusedInput) {
        this.setState(() => ({ focusedInput }))
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />

                <select onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
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

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

// export default ExpenseListFilters;
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);