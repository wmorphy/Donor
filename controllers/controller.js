const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome= (req, res) => {
    res.render("home");
};
const fetchProfile = (req, res) => {
    res.render("profile");
}

const fetchTeam = (req, res) => {
    res.render("teamprofile");
}

const fetchAppointments = (req, res) => {
    res.render("appointments");
}

module.exports = {
    fetchLanding, fetchHome, fetchProfile, fetchTeam, fetchAppointments
}