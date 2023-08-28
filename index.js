const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('Hello, World');

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});