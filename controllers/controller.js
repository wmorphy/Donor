const fetchLanding = (req, res) => {
    res.render("index");
};

const fetchHome= (req, res) => {
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

const fetchTeam = (req, res) => {
    res.render("teamprofile");
}

module.exports = {
<<<<<<< HEAD
    fetchHome, fetchProfile, fetchIndex, fetchScheduler, fetchCreateAccount
};
=======
    fetchLanding, fetchHome, fetchProfile, fetchTeam
}
>>>>>>> d5f2c2ee487be26b0c867fcc2adde045f678271f
