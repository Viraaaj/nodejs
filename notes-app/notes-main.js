const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes....";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  //filter will return array of matches
  // const duplicateNotes = notes.filter((note) => {
  //   // return false; //if we return true filter will keep duplicateNotes
  //   return note.title === title;
  // });

  //find will return the first match only
  const duplicateNoteSingle = notes.find((note) => note.title === title);

  if (!duplicateNoteSingle) {
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

const notesList = () => {
  const list = loadNotes();
  console.log(chalk.bgBlueBright.black("Your Notes...."));
  list.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const list = loadNotes();
  const readNote = list.find((note) => note.title === title); //When using file always use () after arrow

  if (readNote) {
    console.log(chalk.bgGreenBright.black("Note:", readNote.title));
    console.log(chalk.bgGreenBright.black("Body:", readNote.body));
  } else {
    console.log(chalk.bgRed.black("No note available"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
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
  notesList: notesList,
  readNote: readNote,
};
