//HTTP requests without library
// https://nodejs.org/docs/latest-v14.x/api/http.html
// https://nodejs.org/docs/latest-v14.x/api/https.html

const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=d12884ec73fb7cd99b6b02af427c62f2&query=Pune";

const request = http.request(url, (response) => {
  let data = "";

  // getting response in chunks, first argument is data, second is callback function
  response.on("data", (chunk) => {
    console.log("Chunk:", chunk);

    data = data + chunk.toString();
  });

  // ending request, first argument is end, second is callback function
  response.on("end", () => {
    console.log("data:", data);

    const responseObject = JSON.parse(data);
    console.log("Data in object format:", responseObject);
  });
});

//required to handle errors
request.on("error", (error) => {
  console.log("Error:", error);
});

request.end(); //necessary as we run without this it will not log anything
