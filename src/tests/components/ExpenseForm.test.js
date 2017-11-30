import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow( <ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

// should render ExpenseForm with expense data
test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow( <ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow( <ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const wrapper = shallow( <ExpenseForm />);
    const value = "New Description";
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
    const wrapper = shallow( <ExpenseForm /> );
    const value = "New Note";
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
    const wrapper = shallow( <ExpenseForm />);
    const value = '123';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should call onFormSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow( <ExpenseForm expense={{ ...expenses[0] }} onFormSubmit={onSubmitSpy}/> );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: parseFloat(expenses[0].amount),
        createdAt: expenses[0].createdAt.valueOf()   
    });
})

test('should set new date on date change', () => {
    const wrapper = shallow( <ExpenseForm /> );    
    const value = moment();
    wrapper.find( SingleDatePicker ).prop('onDateChange')(value);
    expect(wrapper.state('date')).toEqual(value);   
})

test('should set focus on change', () => {
    const wrapper = shallow( <ExpenseForm /> );
    const value = true;
    wrapper.find( SingleDatePicker ).prop('onFocusChange')({focused: value});
    expect(wrapper.state('focused')).toBe(value);
})