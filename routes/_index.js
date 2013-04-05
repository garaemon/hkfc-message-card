// _index.js
exports.get_url = "/";
exports.get = function(req, res, next) {
    res.render('index');
};

