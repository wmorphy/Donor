const fetchHome = (req, res) => {
    res.render("home");
};

const fetchHomePage= (req, res) => {
    res.render("homePage");
};
const fetchProfile = (req, res) => {
    res.render("profile");
}


module.exports = {
    fetchHome, fetchHomePage, fetchProfile
};