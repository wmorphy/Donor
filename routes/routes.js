const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const restreqs = require("../controllers/restreqs");



router.get("/", controller.fetchLanding);
router.get("/about", controller.fetchAbout);
router.get("/contact", controller.fetchContact);
router.get("/home", controller.fetchHome);
router.get("/signUp", controller.fetchSignUp);
router.get("/signIn", controller.fetchSignIn);
router.get("/profile", controller.fetchProfile);
router.get("/teams", controller.fetchTeams);
router.get("/teamProfile", controller.fetchTeam);
router.get("/book", controller.fetchBookApp);




router.get('/api/:id', restreqs.findProfile);
// find all notifications
router.get('/api-notifs', restreqs.findAllNotifs);
// find donations
router.get('/api-donations', restreqs.findDonations);




module.exports = router;