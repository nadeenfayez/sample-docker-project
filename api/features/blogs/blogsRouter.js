const { getAllBlogsController, seedController } = require("./blogsController");


const express = require("express");

const router = express.Router();


router.get("/", getAllBlogsController);

router.post("/seed", seedController);


module.exports = router;