const express = require("express");
const app = express();
const db = require("./models/db");
const routes = require("./routes/routes");
const PORT = process.env.PORT || 3000;


// setup body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + '/css'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`);
});