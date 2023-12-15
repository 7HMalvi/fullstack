const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const signUp = async(req, res) => {

    const { username, password, hashedPassword, userType } = req.body;

    try {
        const isFound = await User.findOne({
            username,
        });

        if (isFound) {
            res.render("login", {
                signUpMessage: "username is not available!",
                loginMessage: "",
            });
            return;
        }

        if (password == req.body.cpassword) {
            const user = new User({
                username: username,
                password: hashedPassword,
                userType: userType,
            });
            const newUser = await user.save();
            res.render("login", {
                signUpMessage: "Signup successfull, Please Login!",
                loginMessage: "",
            });
        } else {
            res.render("login", {
                signUpMessage: "Both password should match!",
                loginMessage: "",
            });
        }
    } catch (error) {
        console.log(error);
        res.render("login", {
            signUpMessage: "Unable to Signup, Please try again!",
            loginMessage: "",
        });
    }
};


const login = async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });

        if (user || user.username != null) {
            const isMatched = await bcrypt.compareSync(password[0], user.password);
            if (isMatched) {
                req.session.userId = user._id;     
                req.session.userType = user.userType;           
                res.redirect("/");
            } else {
                res.render("login", {
                    loginMessage: "Username and/or Password are incorrect!",
                    signUpMessage: "",
                });
            }
        }
    } catch (error) {
        res.render("login", {
            loginMessage: "Username and/or Password are incorrect!",
            signUpMessage: "",
        });
    }
};

const getLogin = (req, res) => {
    res.render("login", { signUpMessage: "", loginMessage: "" });
};

const getSignUp = (req, res) => {
    res.redirect("/login");
};

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
};

module.exports = {signUp, login, getLogin, getSignUp, logout};