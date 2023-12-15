const express = require("express");
const expressSession = require("express-session");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const g2testform = require("./models/userModel");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");
const Appointment = require('./models/appointment');


var MongoClient = require("mongodb").MongoClient;

const app = new express();



app.use(express.static("public"));
app.use('/public', express.static(__dirname + '/public' ));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: "secretkey",
  })
);



global.loggedIn = null;
global.userType = null;
global.selectedDate = false;

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  userType = req.session.userType;
  next();
});

app.use("/", userRouter);
app.use("/", loginRouter);

app.set("view engine", "ejs");


mongoose.connect (
  "mongodb+srv://hmalvi0450:conestogacollege@cluster0.0jqleke.mongodb.net/",
  { useNewUrlParser: true });



app.listen(4000, () => {
  console.log("App listening on port" + 4000);
});
