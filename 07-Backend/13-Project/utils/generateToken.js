const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    // return JsonWebTokenError.sign({ email: user.email, id: user._id }, "virvirviru");
    console.log(process.env.JWT_KEY);
    return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY );
};
module.exports.generateToken = generateToken;