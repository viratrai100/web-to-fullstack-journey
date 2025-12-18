const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/practice`);


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    age: Number
})


// mongoose.model("user", userSchema); 
// user -> plural = users 
// hum iss file ka usecase ko kisi routes me karna chahte hain. -> jiske liye module ko export karna padega

// module.exports(mongoose.model("user", userSchema));  // wrong -> ye export method nahi hai , ek property hai.
// module.exports = 14 ;
module.exports = mongoose.model("user", userSchema); // humne yaha se model ko export kiya hai taki uske basis pe hum create,read,delete kar sake
