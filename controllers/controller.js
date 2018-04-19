const fetchLanding = (req, res) => {
    res.render("landing");
};

const fetchHome = (req, res) => {
    res.render("home");
};

module.exports = {
    fetchLanding, fetchHome
};