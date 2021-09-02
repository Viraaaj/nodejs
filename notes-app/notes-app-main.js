const getNotes = require("./notes-main.js");
const chalk = require("chalk");

const command = process.argv[2];

if (command === "add") {
  console.log("Adding notes");
} else if (command === "remove") {
  console.log("Removing notes");
}

//process.argv used to get input from user
//process.argv will give 2 default strings
// 1st is path to node executable on machine
// 2nd path to app.js, here notes-app-main.js
//3rd is the value that we provide while running node notes-app-main.js value
console.log(process.argv);
