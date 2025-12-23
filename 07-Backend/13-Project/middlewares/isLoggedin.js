const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");



module.exports = async function (req, res, next) {
    // if(!req.cookie.token) {
        if(!req.cookies.token) {
        req.flash("error", "you need to login first");
        return res.redirect("/");
    }
    // agar user ka data match nahi hua , to custom message show krea , sath hi , user dusre router pe redirect kar dega 

    try{
        // let decoded = jwt.verify(req.cookie.token, process.env.JWT_KEY); 
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
        .findOne({ email: decoded.email })
        .select("-password");  // user ke data me se password ko remove kar rahe hain.

        req.user = user;
        next();
    }
    catch(err) {
        req.flash("error", "something went wrong");
        // req.redirect("/"); // aur baki kisi aur error ke liye dusre router pe redirect kar dega, sath hi 
        return res.redirect("/"); 
    }
}