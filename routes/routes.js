const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/home", controller.fetchHome);
router.get("/HomePage", controller.fetchHomePage);
router.get("/profile", controller.fetchProfile);

module.exports = router;