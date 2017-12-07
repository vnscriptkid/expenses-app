import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);
const uid = 'uidForTest';
const defaultState = { auth: { uid } };

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const now = moment().valueOf();
    const action = editExpense('123abc', { description: 'des fixed', note: 'note fixed', amount: 100, createdAt: now });
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

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
})


test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'High quality mouse',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultState);
    const defaultData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
})

test('should set up expense action object', () => {
    const returnedAction = setExpenses(expenses);
    expect(returnedAction).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
})

test('should retrieve all expenses from database', (done) => {
    // expect to get all the prepared data in beforeEach
    const store = createMockStore(defaultState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        })
        done();
    })
})

test('should remove expense completely from database', (done) => {
    const store = createMockStore(defaultState);

    // delete expense with id 2 by dispatch startRemoveExpense action
    store.dispatch(startRemoveExpense({ id: 2 })).then(() => {
        // expect store catch right object returned
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 2
        })
        // expect data in db is deleted        
        return database.ref(`/users/${uid}/expenses/${2}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        // const expensesObject = snapshot.val();
        // expect(Object.keys(expensesObject).length).toBe(2);
        // expect(Object.keys(expensesObject)).not.toContain(2);
        done();
    })
})

test('should edit expense in the database', (done) => {
    const store = createMockStore(defaultState);
    const updates = { description: 'updated' };
    store.dispatch(startEditExpense(1, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: 1,
            updates: updates
        })
        return database.ref(`users/${uid}/expenses/${1}`).once('value')
    }).then((snapshot) => {
            const updatedExpense = snapshot.val();
            // expect(updatedExpense).toEqual({
            //     ...expenses[1],
            //     ...updates
            // })
            done();
        })
})




// test('should setup correct add-expense-action-object in case nothing passed in', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })

