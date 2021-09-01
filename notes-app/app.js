// const appName = require("./utils.js");
// console.log("Name is:", appName);

// const addFunction = require("./utils.js");
// const sum = addFunction(2, 3);
// console.log("Sum is:", sum);

const getNotes = require("./notes.js");
const notes = ["\n" + "Note1" + "\n" + "Note2"];
const allNotes = getNotes(notes);
console.log("Notes are:", ...allNotes);
