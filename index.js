const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './file.csv',
    header: [
        { id: 'Location', title: 'location' },
        { id: 'Year', title: 'year' },
        { id: 'Production', title: 'production' },
    ]
});

const records = [
    {
        "Location": "LCO",
        "Year": 110510,
        "Production": "+20.63%"
    },
    {
        "Location": "LFP",
        "Year": 295450,
        "Production": "+94.12%"
    }
];

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });