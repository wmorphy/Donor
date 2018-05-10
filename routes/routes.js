const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const restreqs = require("../controllers/restreqs");

router.get("/", controller.fetchLanding);
router.get("/about", controller.fetchAbout);
router.get("/contact", controller.fetchContact);
router.get("/home", controller.fetchHome);
router.get("/signup", controller.fetchSignUp);
router.get("/signin", controller.fetchSignIn);
router.get("/profile", controller.fetchProfile);
router.get("/teams", controller.fetchTeams);
router.get("/teamprofile", controller.fetchTeam);
router.get("/book", controller.fetchBookApp);


// create new member
router.post("/api-createmember", restreqs.createMember);
// find member
// router.get('/api/:id', restreqs.findMember);

// find all notifications
router.get('/api-notifs', restreqs.findAllNotifs);



module.exports = router;