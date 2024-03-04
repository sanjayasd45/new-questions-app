const WrapAsync = require("../helper/WrapAsync.js");
const User = require("../models/user.model.js");


module.exports.renderLogin = (req, res, next) => {
    res.render("pages/login.ejs");
};

module.exports.renderSignup = (req, res, next) => {
    res.render("pages/signup.js");
};

module.exports.signup = WrapAsync(async(req, res, next) => {
    const {photo, name, email, username, password} = req.body;
    const userData =  new User(photo, name, email, username);
    const registeredUser = await User.register(userData, password);
    res.redirect("/question");
});

module.exports.login = (req, res, next) => {
    const redirectUrl = res.locals.redirectUrl || "/question";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err)
        };
        res.redirect("/question");
    });
    res.redirect("/question");
};