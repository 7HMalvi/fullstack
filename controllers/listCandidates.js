const User = require("../models/userModel");

const listCandidates = async (req, res) => {

  const user = await User.find({testResult : "true"});
    res.render("listCandidates", { user });
  };

  module.exports = { listCandidates }
  