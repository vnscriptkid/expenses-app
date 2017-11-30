import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow( <EditExpensePage 
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
        history={historySpy}
        expense={expenses[0]}
        /> 
    );
}) 

test('should render Edit Expense Page correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
    wrapper.find( ExpenseForm ).prop('onFormSubmit')(expenses[0]);
    expect(editExpenseSpy).toHaveBeenCalledWith(
        expenses[0].id,
        {
            description: expenses[0].description,
            note: expenses[0].note,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt
        }
    );
    expect(historySpy.push).toHaveBeenCalledWith('/');
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenCalledWith({
        id: expenses[0].id
    })
})



