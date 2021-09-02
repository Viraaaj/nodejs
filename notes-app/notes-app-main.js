const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes-main.js");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding notes");
// } else if (command === "remove") {
//   console.log("Removing notes");
// }

// process.argv used to get input from user
// process.argv will give 2 default strings
// 1st is path to node executable on machine
// 2nd path to app.js, here notes-app-main.js
// 3rd is the value that we provide while running node notes-app-main.js value
// console.log("process.argv:" + "\n", process.argv);

console.log("");

// yargs

// customizing yargs version:
yargs.version("1.1.0");

//Creating add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, //By setting this true we need to input a title
      type: "string", //by default if you use --title only it is a boolean so it is necessary to set title
    },
    time: {
      describe: "Add a reminder time",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    console.log("Title:", argv.title);
    console.log("Time:", argv.time);
  },
});

//Creating remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note....");
  },
});

//Creating list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing your notes....");
  },
});

//Creating read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note....");
  },
});

// console.log("yargs.argv:" + "\n", yargs.argv); //This is mandatory | if we comment this the app will not run
// instead of above line | if we dont want any logs in cmd we can use:
yargs.parse();
