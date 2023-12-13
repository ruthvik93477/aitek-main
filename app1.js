const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const ejs = require('ejs');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html');
})

app.listen(port,()=>{
    console.log(`server runnig at ${port}`)
})