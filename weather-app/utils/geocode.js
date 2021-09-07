const request = require("postman-request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYmF0bWFuMTI5OSIsImEiOiJja3Q4cnRqc2MxNTdnMm9wZWJ2d2lqdjVwIn0.Wwpp1gd7YlZc4n5VWV2-sg&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect location server", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find longitude and latitude of location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
