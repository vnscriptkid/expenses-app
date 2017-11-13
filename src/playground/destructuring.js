// ** Object destructuring

// console.log('destructuring.js');

// const book = {
//     title: 'Hieu ve trai tim',
//     author: 'Minh Niem',
//     publisher: {
//         name: 'Nha Xuat Ban Tre'
//     }
// }

// const {name: publisherName = 'default value'} = book.publisher;

// console.log(publisherName);

// ** Array destructuring

const address = [ '34a Tran Phu', 'Ba Dinh', 'Ha Noi', '100000' ]

const [ street, district, city = 'HCM'] = address;

console.log(`You are in ${city}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee = 'something', , mediumSizePrice = 'some price'] = item

console.log