const express = require('express');
const app = express();
const port = 3000;
hostname = 'localhost';

app.get('/',(req, res)=>{
    res.send("Hello World!");
})

app.listen(port,()=>{
    console.log(`The app is listening at http://localhost:${port}`);
})


