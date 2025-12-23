const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose"); // development ke phase me -> mongoose se aayega

mongoose
  // .connect("/scatch")
  // .connect(`${config.get("MONGODB_URI")}/scatch`)
  .connect(`${config.get("MONGODB_URI")}/project`)
  .then(function () {
    dbgr("Connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
