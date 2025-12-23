const multer = require("multer");
const path = require("path");
const crypto = require("crypto");


// DiskStorage 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    crypto.randomBytes(12, function(err, name) {
        const fn = name.toString("hex")+path.extname(file.originalname);  // name is buffer -> so we convert into String 
        cb(null, fn);  // fn -> filename
    })
    
  },
});
// export, upload variable 

const upload = multer({ storage: storage });

module.exports = upload;


