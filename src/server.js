const express = require('express') //commonjs
const path = require('path') //commonjs
    // import express from 'express';//es modules -> new syntax
const app = express() //app epress

require('dotenv').config() //cấu hình dotenv
const port = process.env.PORT || 8888 //port
const hostname = process.env.HOST_NAME
    // console.log(process.env);
    // console.log(process.env.PORT);
    //config static file
app.use(express.static(path.join(__dirname, 'public')));

// config template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// define route
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/first-port', (req, res) => {
    res.render('sample.ejs')

})

//chạy server với port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})