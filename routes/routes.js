const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const restreqs = require("../controllers/restreqs");
var csrf = require('csurf');

var csrfProtection = csrf();



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





//
// router.get("../views/signIn", function(req, res, next){
//     res.render("../views/signIn", {csrfToken: req.csrfToken()});
// });


router.get('/api-createuser/:pw/:first/:last/:DOB/:address/:suburb/:postcode/:state/:phone/:email', restreqs.createMember);





router.get('/api/:id', restreqs.findProfile);
// find all notifications
router.get('/api-notifs', restreqs.findAllNotifs);
// find donations
router.get('/api-donations', restreqs.findDonations);


router.get('/api-activeuserid/:id', restreqs.updateActiveUserID);
router.get('/api-activeuserid', restreqs.findActiveUserIDs);

module.exports = router;