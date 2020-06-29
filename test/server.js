const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const employee = require("./api/employee")
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
//connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("Mongo DB connected!!"))
    .catch(error => console.log(error));


// Use Routes
app.use("/api/employee", employee)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server running on port " + port));
