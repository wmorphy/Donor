const fetchHome = (req, res) => {
    res.render("home");
};

const fetchProfile = (req, res) => {
    res.render("profile");
};

const fetchIndex = (req, res) => {
    res.render("index");
};

const fetchScheduler = (req, res) => {
    res.render("scheduler");
};

const fetchCreateAccount = (req, res) => {
    res.render("createaccount");
};

module.exports = {
    fetchHome, fetchProfile, fetchIndex, fetchScheduler, fetchCreateAccount
};