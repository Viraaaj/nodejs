// const appName = require("./utils.js");
// console.log("Name is:", appName);

// const addFunction = require("./utils.js");
// const sum = addFunction(2, 3);
// console.log("Sum is:", sum);

const getNotes = require("./notes.js");
const notes = ["\n" + "Note1" + "\n" + "Note2"];
const allNotes = getNotes(notes);
console.log("Notes are:", ...allNotes);

console.log("");

//npm packages

// validator
console.log("Validator:");
const validator = require("validator");
console.log(
  "Is entered value is email?:",
  validator.isEmail("hello@gmail.com")
);

console.log("Is entered value is URL?:", validator.isURL("https/hello.com"));

console.log("");

// chalk
console.log("chalk:");
const chalk = require("chalk");
console.log(chalk.greenBright("SUCCESS!"));
console.log(chalk.redBright("ERROR!"));
console.log(chalk.bold.bgMagentaBright("INSTALLING PACKAGES...."));
console.log(chalk.underline.bgBlueBright("DONE...."));

console.log("");

// nodemon
// npm i nodemon -g: installing module globally
// when we install module globally it you will not see it in package.json coz you are installing it on your machine
// Using nodemon you dont need to run node command everytime you change the file
// use nodemon app.js instead node app.js
console.log("nodemon!!");
