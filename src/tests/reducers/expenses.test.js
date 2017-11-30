import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    const afterState = expensesReducer(expenses, action);
    expect(afterState).toEqual([expenses[1], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'        
    }
    const afterState = expensesReducer(expenses, action);
    expect(afterState).toEqual(expenses);
})

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'new des',
            note: 'new note',
            amount: 100,
            createdAt: moment(0)
        }
    }
    const afterState = expensesReducer(expenses, action);
    // console.log(JSON.stringify(afterState, undefined, 2));
    expect(afterState).toEqual([
        ...expenses,
        action.expense
    ])
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'edit des',
            note: 'edit note',
            amount: 200,
            createdAt: moment(0).add(1, 'days')
        }
    }
    const afterState = expensesReducer(expenses, action);    
    expect(afterState[1]).toEqual({
        ...expenses[1],
        ...action.updates
    })
})

test('should not edit if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '100',
        updates: {
            description: 'Will not change anything'
        }
    }
    const afterState = expensesReducer(expenses, action);
    expect(afterState).toEqual(expenses);
})





