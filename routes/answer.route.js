const express = require("express");
const answer = require("../controllers/answer.controller.js");
const router  = express.Router();

router.post("/add/:id",
   answer.addAnswer
);
router.put("/:id/update/:answerId",
   answer.editAnswer 
);
router.delete("/:id/delete/:answerId",
   
);
module.exports = router