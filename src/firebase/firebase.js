import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// setTimeout(() => {
//     console.log('start adding data to db');
//     database.ref('expenses').push({
//         des: 'dummy data'
//     })
// }, 5000)

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref('expenses').on('child_changed', (childSnapshot, prevChildKey) => {
//     console.log(childSnapshot.val());
//     console.log(prevChildKey);
// })

// database.ref('expenses/-Kz9JoR3RgrdlEPOIwRE').update({
//     where: {
//         store: 'bookstore',
//         street: 'Tran Phu',
//         number: 123
//     }
// })

// database.ref('expenses').on('child_changed', ())

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         console.log('before forEach');
//         snapshot.forEach((childSnapshot) => {
//             // console.log('doing stuff');
//             // console.log(childSnapshot);
//             const expense = childSnapshot.val();
//             expenses.push({
//                 id: childSnapshot.key,
//                 des: expense.description,
//                 note: expense.note,
//                 time: expense.createdAt,
//                 amount: expense.amount
//             })
//         })
//         console.log('after forEach');
//         console.log(expenses);
//     })
    // .then((snapshot) => {
    //     const expenses = [];
    //     console.log('before forEach');
    //     snapshot.forEach((childSnapshot) => {
    //         console.log('doing stuff');
    //         console.log(childSnapshot);
    //         const expense = childSnapshot.val();
    //         expenses.push({
    //             id: childSnapshot.key,
    //             des: expense.description,
    //             note: expense.note,
    //             time: expense.createdAt,
    //             amount: expense.amount
    //         })
    //     })
    //     console.log('after forEach');
    //     console.log(expenses);
    // });



// database.ref('expenses').push({
//     description: 'buy clothes',
//     amount: 225.8,
//     note: 'fancy clothes',
//     createdAt: moment().valueOf()
// })

// database.ref('expenses').push({
//     description: 'buy shoes',
//     amount: 100,
//     note: 'cheap shoes',
//     createdAt: moment().valueOf()
// })

// database.ref('expenses').push({
//     description: 'buy books',
//     amount: 105.8,
//     note: 'famous books',
//     createdAt: moment().valueOf()
// })

// database.ref().set({
//     name: 'thanh',
//     age: 22,
//     job: 'web dev',
//     isMarried: false,
//     location: {
//         city: 'hanoi',
//         country: 'vietnam'
//     }
// }).then(() => {
//     console.log('data is already written to db');
// }).catch((e) => {
//     console.log(e);
// })

// database.ref('attributes').remove()
//     .then(() => {
//         console.log('remove succeed');
//     })
//     .catch((err) => {
//         console.log('something wrong happen', err);
//     })

// database.ref().update({
//     name: 'thanh nguyen',
//     'location/city': 'hcm',
//     'location/district': 'Thu Duc'
// })
// .then(() => {
//     console.log('success updated');
// })
// .catch((err) => {
//     console.log(err);
// })


