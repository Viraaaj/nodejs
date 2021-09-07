const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d12884ec73fb7cd99b6b02af427c62f2&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather server", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
