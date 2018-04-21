const fetchHome = (req, res) => {
    res.render("home");
};

const fetchHomePage= (req, res) => {
    res.render("homePage");
};
const fetchProfile = (req, res) => {
    res.render("profile");
}

<<<<<<< HEAD

module.exports = {
    fetchHome, fetchHomePage, fetchProfile
=======
const fetchTeam = (req, res) => {
    res.render("teamprofile");
}

module.exports = {
    fetchHome, fetchProfile, fetchTeam
>>>>>>> origin/addison
};