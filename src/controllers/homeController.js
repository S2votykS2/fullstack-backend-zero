// Define route in controller(from router/web.js) có thể tạo nhiều controller để đn từng router
const connection = require('../config/database')
const getHomepage = (req, res) => {
    // process data trong model rồi call model
    //call model
    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
            let users = results;
            // console.log('>>>>>Results = ', results);
            res.send(JSON.stringify(users));
        }
    );
}
const getFirstpage = (req, res) => {
    res.render('sample.ejs');
}


module.exports = {
    getHomepage,
    getFirstpage
}