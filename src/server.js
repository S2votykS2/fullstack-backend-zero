// 1.Require
const express = require('express') //commonjs
const path = require('path') //commonjs
    // import express from 'express';//es modules -> new syntax
const app = express() //app epress
    // import file tự tạo
    // const configViewEngine = require('./config/viewEngine');
    // const webRouter = require('./routes/web');
    // const webRouter2 = require('./routes/subweb');


//require cấu hình dotenv
require('dotenv').config()
    //gán(assign)
const port = process.env.PORT || 8888 //port
const hostname = process.env.HOST_NAME
    // console.log(process.env);
    // console.log(process.env.PORT);


// 2.config static file
// 3.config template engine
// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
// console.log(">>DIRNAME: ", __dirname);
const configViewEngine = require('./config/viewEngine');
configViewEngine(app);

// 4.Define route
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/first-port', (req, res) => {
//     res.render('sample.ejs')
// })
const webRouter = require('./routes/web');
const webRouter2 = require('./routes/subweb');
app.use('/main-link', webRouter)
app.use('/sub-link', webRouter2)

// Test connection
const connection = require('./config/database')
    // simple query
connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
        console.log('>>>>>Results = ', results); // results contains rows returned by server
        // console.log('>>>>>Fields = ', fields); // fields contains extra meta data about results, if available
    }
);

//5.Chạy server với port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})