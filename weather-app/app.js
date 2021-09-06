const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=d12884ec73fb7cd99b6b02af427c62f2&query=Pune"; //pass &units=f to change degress to faranhite

request({ url: url, json: true }, (error, response) => {
  // as we are passing json: true following code will not required:
  //   const data = JSON.parse(response.body);
  //   console.log("Weather api data:", data);
  //   console.log("Weather api data current:", data.current);

  console.log("Weather api data current:", response.body.current);

  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});
