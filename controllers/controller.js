const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome = (req, res) => {
    res.render("news");
};

const fetchProfile = (req, res) => {
    res.render("profile");
};


const fetchTeamProfile = (req, res) => {
    res.render("teamprofile");
};

const fetchTeams = (req, res) => {
    res.render("teams");
};

const fetchInfo = (req, res) => {
    res.render("info");
};
const fetchContact = (req, res) => {
    res.render("contact");
};

const fetchTeam = (req, res) => {
    res.render("teamprofile");
};

const fetchSignIn = (req, res) => {
    res.render("signin");
};
const fetchSignUp = (req, res, next) => {
    res.render("signUp");

};
const fetchBookApp = (req, res) => {
    res.render("appointment");
};

const fetchLeaderboards = (req, res) => {
    res.render("leaderboards");
};

const fetchEvents = (req, res) => {
    res.render("events");
};


module.exports = {
    fetchLanding, fetchHome, fetchProfile, fetchTeamProfile, fetchLeaderboards, fetchEvents, fetchTeam, fetchTeams, fetchBookApp, fetchSignIn, fetchSignUp, fetchInfo, fetchContact
}
