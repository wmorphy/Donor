// const fetchLanding = (req, res) => {
//     res.render("index");
// };

const fetchHome= (req, res) => {
    res.render("home");
};
const fetchProfile = (req, res) => {
    res.render("profile");
}
const fetchTeam = (req, res) => {
    res.render("teamprofile");
}
const fetchSignIn = (req, res) => {
    res.render("signIn");
}
const fetchSignUp = (req, res) => {
    res.render("signUp");
}
const fetchAppointments = (req, res) => {
    res.render("appointments");
}
const fetchNews = (req, res) => {
    res.render("news");
}


module.exports = {
    fetchHome, fetchProfile, fetchTeam, fetchAppointments, fetchSignIn, fetchSignUp, fetchNews
}