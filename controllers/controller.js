const fetchHome = (req, res) => {
    res.render("home");
};

const fetchProfile = (req, res) => {
    res.render("profile");
}

const fetchTeam = (req, res) => {
    res.render("teamprofile");
}

module.exports = {
    fetchHome, fetchProfile, fetchTeam
};