const fetchHome = (req, res) => {
    res.render("home");
};

const fetchHomePage= (req, res) => {
    res.render("homePage");
};



module.exports = {
    fetchHome, fetchHomePage
};