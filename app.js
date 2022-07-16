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
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bmi = weight/(height * height)
    res.send('your bmi is ' + bmi);
})

app.listen(process.env.PORT, () => {
    console.log('I am awake!')
});