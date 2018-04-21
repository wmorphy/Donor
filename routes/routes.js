const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

<<<<<<< HEAD
router.get("/home", controller.fetchHome);
router.get("/HomePage", controller.fetchHomePage);
router.get("/profile", controller.fetchProfile());
=======
router.get("/", controller.fetchHome);
router.get("/profile", controller.fetchProfile);
router.get("/teamprofile", controller.fetchTeam);
>>>>>>> origin/addison

module.exports = router;