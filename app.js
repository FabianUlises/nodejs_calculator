require('dotenv').config();
const express = require('express');
const app = express();


// app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/', (req, res) => {
    console.log(req.body)
    const number1 = Number(req.body.num1);
    const number2 = Number(req.body.num2);
    const result = number1 + number2;
    res.send('the result is ' + result)
});
app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/public/calc.html');
})
app.post('/bmi', (req, res) => {
    console.log(req.body)
    res.send(req.body);
})

app.listen(process.env.PORT, () => {
    console.log('I am awake!')
});