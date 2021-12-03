const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './file.csv',
    header: [
        { id: 'phone', title: 'PHONE' },
    ]
});

const records = [
    { phone: '+3132511492' },
    { phone: '+5825487963' }
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });