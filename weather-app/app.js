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

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(18.533, 73.867, (error, data) => {
  console.log("Forecast Error:", error);
  console.log("Forecast Data:", data);
});

geoCode("Pune", (error, data) => {
  console.log("Geocode Error:", error);
  console.log("Geocode Data:", data);
});
