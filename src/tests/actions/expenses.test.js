import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const now = moment().valueOf();
    const action = editExpense('123abc', {description: 'des fixed', note: 'note fixed', amount: 100, createdAt: now });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'des fixed',
            note: 'note fixed',
            amount: 100,
            createdAt: now
        }
    })
})

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'new des',
        note: 'new note',
        amount: 200,
        createdAt: moment().valueOf()
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup correct add-expense-action-object in case nothing passed in', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

