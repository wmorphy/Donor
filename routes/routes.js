const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.fetchLanding);
router.get("/home", controller.fetchHome);

module.exports = router;