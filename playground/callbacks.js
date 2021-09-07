setTimeout(() => {
  console.log("2 Seconds up");
}, 2000);

const names = ["hello", "world", "hack"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    return data;
  }, 2000);

  //here geoCode is not returning anything | setTimeout is returning data and hence we will get undefined
};
geoCode("Pune");

const geoCodeCallback = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);

  //here geoCode is not returning anything | setTimeout is returning data and hence we will get undefined
};

geoCodeCallback("Pune", (data) => {
  console.log("geoCodeCallback data:", data);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2000);
};

add(2, 3, (sum) => {
  console.log("Sum is:", sum);
});
