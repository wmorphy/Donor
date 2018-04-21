const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

<<<<<<< HEAD
router.get("/", controller.fetchIndex);
router.get("/home", controller.fetchHome);
router.get("/profile", controller.fetchProfile);
router.get("/scheduler", controller.fetchScheduler);
router.get("/createaccount", controller.fetchCreateAccount);
=======
router.get("/", controller.fetchLanding);
router.get("/home", controller.fetchHome);
router.get("/profile", controller.fetchProfile);
router.get("/teamprofile", controller.fetchTeam);

>>>>>>> d5f2c2ee487be26b0c867fcc2adde045f678271f

module.exports = router;