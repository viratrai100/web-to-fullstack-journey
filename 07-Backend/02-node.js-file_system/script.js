// Node.js
// Introduction To Node.js
// Installing Node.js and npm
// Working with modules
// understanding HTTP module

// const { writeFile, appendFile, copyFile, rename } = require("fs");

// Node.js
// JavaScript originally sirf frontend ke liye use hoti thi,
// lekin Node.js runtime ki help se hum JavaScript ko server side pe bhi run kar sakte hain,
// aur is tarah backend create kar sakte hain. Backend tab tak active rahega jab tak Node.js process run ho raha hai.

// npm
// npm ek app store jaisa hai Node.js ke liye,
// jaha se tum ready-made code packages download karke apne project me use kar sakte ho.
// npm ka kaam ->  Install, update, aur manage karna third-party libraries/modules ka, jo tum apne JS/Node project me use karoge.

// writeFile
// appendFile
// copyFile
// rename
// unlink

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// npm init -> packagr.json ->
// const fs = require("node:fs");
const fs = require("fs");

// ----------------------------------Write------------------------------------------------------------------------

// fs.writeFile("viru.txt", "Hello Bhailog Kaise Ho", function(err){
//     if(err) console.error(err);
//     else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// -------------------------------Append-------------------------------------------------------------------------------------

// fs.appendFile("viru.txt", " , Mai To Badhiya hu", function (err) {
//   if (err) console.error(err);
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// -------------------------------Rename-------------------------------------------------------------------------------------

// fs.rename("viru.txt", "virat.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// -------------------------------Copy-------------------------------------------------------------------------------------

// fs.copyFile("virat.txt", "./copy/copy.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// ---------------To Check The ERROR HANDLING--------------------------------------------
// fs.copyFile("virat.txt", "./copy2/copy.txt", function (err) {
//   if (err) console.error(err.message);  // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// -------------------------------Unlink-------------------------------------------------------------------------------------

// --------------copy another file to delete---------

// fs.copyFile("virat.txt", "./copy/copyDel.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// ----------------------------unlink-------

// fs.unlink("./copy/copyDel.txt", function (err) {
//   if (err) console.error(err.message);  // to sow error message.
//   else console.log ("Sb Sahi Chal Raha Hai BHai");
// });

// -----------------------------------rmdir-------------------------------------------------------------------------------------------

// fs.rmdir("./copy2", function (err) {
//   if (err) console.error(err.message); // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });  // Copy2 Folder delete nahi hoga, kyunki wo empty nahi , (matlab kuch aur jugad karna padega)

// fs.rmdir("./copy2", {recursive: true}, function (err) {
//   if (err) console.error(err.message); // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });  // copy2 folder sucessfully removed

// we can -> (use rm instead of rmdir)

// fs.rm("./copy2", { recursive: true }, function (err) {
//   if (err) console.error(err.message); // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// ------------------------------Create Folder------------------------------------------------------------------------------------------

// fs.mkdir("./copy2", function (err) {
//   if (err) console.error(err.message); // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
// });

// --------------------------------Read File Content------------------------------------------------------------------------------------

// fs.readFile("virat.txt", "utf8", function (err, data) {
//   if (err) console.error(err.message); // to sow error message.
//   else console.log("Sb Sahi Chal Raha Hai BHai");
//   console.log(data);
// });

// ----------------------------------------Create Server--------------------------------------------------------------------------------
const http = require("http");

const server = http.createServer(function (req, res) {
  res.end("Pehla Server Ready hai");
});

server.listen(3000);

// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// To Write :-
// fs.writeFileSync(file, data[, options])

// to Append :-
// fs.appendFile(path,data[, options])
// filehandle.appendFile(data[, options])

// to Rename :-
// fs.rename(oldPath, newPath, callback);

// to Copy :-
// fsPromises.copyFile(src, dest[, mode]);

// Unlink :-
// fs.unlinkSync(path)

// rmdir :-
//fs.rmdir(path[, options],callback)
// rm :-
//fs.rmdir(path[, options],callback)

// To Create Folder :-
// f.mkdir(path[, options])

// to read file
// fs.readFile(path[, options], callback)

// create server :-
// http.createServer([options][, requestListener])

// node script.js

// --------------------------------------------------------------------------------------------------------------------------------------------