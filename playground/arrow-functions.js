// Normal function
const square = function (x) {
  return x * x;
};
console.log(square(3));

// Arrow function
const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(5));

const squareThird = (x) => x * x;
console.log(squareThird(7));

// object
const event = {
  name: "Birthday party",
  guestList: ["a", "b", "c", "d"],
  printGuestList: function () {
    console.log("Guest list for event", this.name);

    this.guestList.forEach(function (guest) {
      console.log(guest, " is attending", this.name);
      //function has its own binding scope
    });

    this.guestList.forEach((guest) => {
      console.log(guest, " is attending arrow function", this.name);
      //arrow function will bind parent in this case printGuestList
    });
  },
  //Here using arrow function will give error as arrow functions do no bind own values | cant use "this" inside arrow
};
event.printGuestList();
