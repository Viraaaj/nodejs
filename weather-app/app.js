const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=d12884ec73fb7cd99b6b02af427c62f2&query=Pune";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log("Weather api data:", data);
  console.log("Weather api data current:", data.current);
});
