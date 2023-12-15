const bcrypt = require("bcrypt");

const hashPassword = async(req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password[0], salt);

    req.body.hashedPassword = hashedPassword;

    next();
};

module.exports = {hashPassword };