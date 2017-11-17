import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC9rxr1t9rmspyGLghMdmxmbTSuU_6WHh0",
    authDomain: "expensify-9ddc3.firebaseapp.com",
    databaseURL: "https://expensify-9ddc3.firebaseio.com",
    projectId: "expensify-9ddc3",
    storageBucket: "expensify-9ddc3.appspot.com",
    messagingSenderId: "871569498824"
};

firebase.initializeApp(config);

const database = firebase.database();

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

database.ref().update({
    name: 'thanh nguyen',
    'location/city': 'hcm',
    'location/district': 'Thu Duc'
})
.then(() => {
    console.log('success updated');
})
.catch((err) => {
    console.log(err);
})


