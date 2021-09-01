// https://nodejs.org/docs/latest/api/fs.html
//Implementation of file system (fs)

const createFileSystem = require("fs"); //need to import required module every time which has unique name

//writeFileSync(): read above doc for more file system modules
createFileSystem.writeFileSync(
  "notes.txt",
  "This file was create by node.js! (edited)."
);

//appending file

createFileSystem.appendFileSync(
  "notes.txt",
  " appendFileSync() as only one argument"
);

createFileSystem.appendFileSync(
  "notes.txt",
  "\n" +
    "\n" +
    [
      "Implementation of appendFileSync()",
      "\n" + "Implementation of appendFileSync() using array as arg",
    ]
);
