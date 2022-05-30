const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
//             useNewUrlParser: true,
//             useUnifiersTopology: true,
//         });
//         console.log('Connect successfully!!');
//     } catch (error) {
//         console.log('Connect failure!!');
//     }
// }

async function connect() {
    mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
        useNewUrlParser: true,
    });
    mongoose.connection
        .once('open', () => console.log('Connected'))
        .on('error', (error) => {
            console.log('Your Error', error);
        });
}

module.exports = { connect };
