const request = require("postman-request");
const forecast = require("./utils/forecast");
const geoCode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=d12884ec73fb7cd99b6b02af427c62f2&query=Pune"; //pass &units=f to change degress to faranhite

// request({ url: url, json: true }, (error, response) => {
//   // as we are passing json: true following code will not required:
//   //   const data = JSON.parse(response.body);
//   //   console.log("Weather api data:", data);
//   //   console.log("Weather api data current:", data.current);

//   //   console.log("Weather api data current:", response.body.current);

//   if (error) {
//     console.log("Unable to connect weather server");
//   } else if (response.body.error) {
//     console.log("unable to find location");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//     );
//   }
// });

// //Getting longitude and latitude of location | mapbox
// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1IjoiYmF0bWFuMTI5OSIsImEiOiJja3Q4cnRqc2MxNTdnMm9wZWJ2d2lqdjVwIn0.Wwpp1gd7YlZc4n5VWV2-sg&limit=1";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   //   console.log("Mapbox response:", response.body);
//   if (error) {
//     console.log("Unable to connect maobox server");
//   } else if (response.body.features.length === 0) {
//     console.log("unable to find longitude and latitude of location");
//   } else {
//     console.log(
//       `Mapbox response longitude and latitude: ${response.body.features[0].center[0]}, ${response.body.features[0].center[1]}`
//     );
//   }
// });

const address = process.argv[2];

if (address) {
  geoCode(address, (error, data) => {
    if (error) {
      return console.log("geocode error:", error);
    }
    // Using return here will stop execution on above line and following code will not execute

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log("forecast error:", error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
} else {
  console.log("Please enter a valid location!!");
}
