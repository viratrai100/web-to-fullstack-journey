const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase");

const userSchema = mongoose.Schema({
  username: {
    type: String
  },
  username: String,
  email: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,    
      ref: "post"
    }
  ]
});

module.exports = mongoose.model("user", userSchema);
// module.exports = mongoose.model("model", userSchema);