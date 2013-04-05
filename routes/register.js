// register.js

exports.post_url = "/register";
exports.post = function(req, res, next) {
    res.send({
        message: "まだ作り途中だよ、ちょっとまってね"
    });
};


