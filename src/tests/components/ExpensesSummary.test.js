import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';

test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow( <ExpensesSummary countExpenses={1} totalExpenses={100}/> );
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow( <ExpensesSummary countExpenses={100} totalExpenses={200}/> );
    expect(wrapper).toMatchSnapshot();
})

