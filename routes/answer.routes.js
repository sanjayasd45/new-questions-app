const express = require("express");
const answer = require("../controllers/answer.controller.js");
const { isLoggedIn, isOwner } = require("../middlewares/user.middlewares.js");
const router  = express.Router();

router.post("/add/:id",
   isLoggedIn,
   answer.addAnswer
);
router.put("/:id/update/:answerId",
   isOwner,
   answer.editAnswer 
);
router.delete("/:id/delete/:answerId",
   isOwner,
   answer.deleteAnswer
);
module.exports = router