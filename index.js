const express = require('express');
const app = express();
require('dotenv').config();

console.log(process.env.DB_NAME);

const PORT = process.env.PORT || 5050;

app.get('/', (req, res)=>{
    res.send('Hello, World');
});

app.get('/test', (req, res)=>{
    res.send('Cool beans 🫘');
});

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});