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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense(id));
        })
    }
}

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        // get uid of the current user
        const uid = getState().auth.uid;        
        // ref to correct expense in db that need to edit
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}

// SET EXPENSES
export const setExpenses = (expenses) =>({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // retrive data from db 
        return database.ref(`users/${uid}/expenses`).once('value').then( (snap) => {
            const expensesObject = snap.val();
            if (expensesObject) {
                // convert object to array
                const expensesArray = Object.keys(expensesObject).map((key) => ({...expensesObject[key], id: key}));
                // dispatch setExpenses with that array
                dispatch(setExpenses(expensesArray))
            }
        })
    }
}