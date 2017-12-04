import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense) => (
    {
        type: 'ADD_EXPENSE',
        expense
    }
)

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

// REMOVE EXPENSE
export const removeExpense = ( id ) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

export const startRemoveExpense = ( {id} = {} ) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense(id));
        })
        // .catch((err) => {
        //     console.log(err);
        // })
    }
}

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET EXPENSES
export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        // retrive data from db 
        return database.ref('expenses').once('value').then( (snap) => {
            const expensesObject = snap.val();
            // convert object to array
            const expensesArray = Object.keys(expensesObject).map((key) => ({...expensesObject[key], id: key}));
            // dispatch setExpenses with that array
            dispatch(setExpenses(expensesArray))
        })
    }
}