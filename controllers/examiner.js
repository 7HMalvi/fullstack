const User = require("../models/userModel");

const getExaminer= async (req, res) => {
    try {
      const user = await User.find();
      res.render("examiner", {
        user: user,
      });
    } catch (error) {
      res.redirect("/");
      console.log("getExaminer err")
    }
  };

const getUserDetails = async(req, res) => {
  try {
    
    const user = await User.findById(req.params.id);
    res.render("userDetails",{
      selectedUser:user,
    });
  } catch (error) {
    res.redirect("/");
    console.log("getUserDetails err")
  }
};

  module.exports = { getExaminer, getUserDetails };