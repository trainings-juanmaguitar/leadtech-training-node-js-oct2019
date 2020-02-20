const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const [, , PORT = 3001] = process.argv;

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    const {str} = req.body;
    const dataToRespond = str.split('').reverse().join('');

    res.end(dataToRespond);
});


app.listen(PORT, () => {
    console.log('server up');
});
