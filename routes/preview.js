// preview.js
exports.post_url = "/preview";
exports.post = function(req, res, next) {
    var name = req.param("name");
    var message = req.param("message");
    var location = req.param("location");
    var cookie_expire = new Date(Date.now() + 60 * 1000);
    if (!name || name.length == 0) {
        res.cookie("message", message, {expires: cookie_expire});
        res.cookie("location", location, {expires: cookie_expire});
        
    }
    else if (!message || message.length == 0) {
        res.cookie("name", name, {expires: cookie_expire});
        res.cookie("location", location, {expires: cookie_expire});
    }
    else if (!location || location.length == 0) {
        res.cookie("name", name, {expires: cookie_expire});
        res.cookie("message", message, {expires: cookie_expire});
    }
    else {
        // var newlined_message = message.split("\n").join("<br />");
        // message.replaceAll("\n", "<br />");
        res.render("preview", {
            name: name,
            message: message.trim(),
            location: location
        });
    }
};

