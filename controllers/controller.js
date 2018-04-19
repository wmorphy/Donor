const fetchHome = (req, res) => {
    res.render("home");
};

const fetchProfile = (req, res) => {
    res.render("profile");
}

module.exports = {
    fetchHome, fetchProfile
};