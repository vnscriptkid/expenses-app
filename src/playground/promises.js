var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'thanh',
        //     age: 22
        // });

        reject('something wrong happened');
    }, 3000);
})

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

// .catch((err) => {
//     console.log(err);
// })