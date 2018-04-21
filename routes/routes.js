const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.fetchLanding);
router.get("/home", controller.fetchHome);
router.get("/profile", controller.fetchProfile);
router.get("/teamprofile", controller.fetchTeam);


module.exports = router;