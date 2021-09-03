const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes....";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    // return false; //if we return true filter will keep duplicateNotes
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreenBright.black("New note added:", title));
  } else {
    console.log(chalk.bgRedBright.black("Note title already exists:", title));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length !== notesToKeep.length) {
    console.log(chalk.bgRedBright.black("removed note:", title));
  } else {
    console.log(chalk.bgRedBright.black("No note available"));
  }

  saveNotes(notesToKeep);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
