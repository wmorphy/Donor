const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome = (req, res) => {
    res.render("news");
};

const fetchProfile = (req, res) => {
    res.render("profile");
}


const fetchTeamProfile = (req, res) => {
    res.render("teamprofile");
}

const fetchTeams = (req, res) => {
    res.render("teams");
}

const fetchAbout = (req, res) => {
    res.render("about");
}

const fetchContact = (req, res) => {
    res.render("contact");
}

const fetchTeam = (req, res) => {
    res.render("teamprofile");
}
const fetchSignIn = (req, res) => {
    res.render("signin");
}
const fetchSignUp = (req, res) => {
    res.render("signUp");
}
const fetchBookApp = (req, res) => {
    res.render("appointment");
}


module.exports = {
    fetchLanding, fetchHome, fetchProfile, fetchTeamProfile, fetchTeam, fetchTeams, fetchBookApp, fetchSignIn, fetchSignUp, fetchAbout, fetchContact
}