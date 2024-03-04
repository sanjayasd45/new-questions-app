const express = require("express");
const user = require("../controllers/user.controller.js");
const passport = require("passport");
const router = express.Router();

router.get("/signup",
  user.renderSignup 
);

router.get("/login",
  user.renderLogin
);

router.post("/signup",
  user.signup
);

router.post("/login", 
  passport.authenticate("local", {
    failureRedirect : "/user/login",
    failureFlash : true
  }),
  user.login 
);

router.get("/logout",
  user.logout
);



module.exports = router