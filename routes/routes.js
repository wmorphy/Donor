const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.fetchIndex);
router.get("/home", controller.fetchHome);
router.get("/profile", controller.fetchProfile);
router.get("/scheduler", controller.fetchScheduler);
router.get("/createaccount", controller.fetchCreateAccount);

module.exports = router;