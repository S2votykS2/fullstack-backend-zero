// Define route in controller(from router/subweb.js) có thể tạo nhiều controller để đn từng router
const getSubHomepage = (req, res) => {
    // process data(in model)
    res.send('Hello Phí Phương Anh');
}
const getSubFirstpage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getSubHomepage,
    getSubFirstpage
}