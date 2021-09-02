const fs = require("fs");

// const book = {
//   title: "Book 1",
//   author: "Author 1",
// };

// stringify takes object and gives JSON
// const bookJSON = JSON.stringify(book);
// console.log("Books JSON data:", bookJSON);

// // parse takes JSON and gives object or array
// const bookPARSE = JSON.parse(bookJSON);
// console.log("Books parse data:", bookPARSE.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json"); //we will get data in bits and bytes | buffer
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log("Title:", data.title);

// steps above:
// dataBuffer: read/get data in buffer format
// dataJSON: converted buffer into json
// data: parsed json into object and accessed particular value

// Challenge

const loadJSONBuffer = fs.readFileSync("1-json.json");
const convertLoadToJSON = loadJSONBuffer.toString();
const JSONToObject = JSON.parse(convertLoadToJSON);
console.log(JSONToObject);

JSONToObject.name = "Hero";
JSONToObject.age = 100000;
console.log(JSONToObject);

const objectToJSON = JSON.stringify(JSONToObject);
fs.writeFileSync("1-json.json", objectToJSON);
console.log(objectToJSON);
