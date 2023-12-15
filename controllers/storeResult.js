const User = require("../models/userModel");

  const storeResult = async(req, res) => {
    let user;
    console.log("store res");

    try {
      const { result, testComments} = req.body;
      let r;
      if (result == "pass"){
        r="true"; 
      } if(result =="fail"){
        r="false";}
      user = await User.findById(req.params.id);
      user.testComments = testComments;
      user.testResult = r;

      user = await user.save();
      res.redirect("/examiner");
    } catch (error) {
        res.redirect("/");
        console.log(error);
}
};

module.exports = {storeResult};
