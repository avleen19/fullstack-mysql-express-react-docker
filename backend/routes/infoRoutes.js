const express = require("express");
const router = express.Router();
const { getAllInfo, createInfo } = require("../controllers/infoController");

router.get("/", getAllInfo);
router.post("/", createInfo);

module.exports = router;
