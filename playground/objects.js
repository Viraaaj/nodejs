// Object pproperty shorthand

const name = "Hello";

const userAge = 25;

// instead of calling name:name we can just use name as both are same named variables
const user = {
  name,
  age: userAge,
  location: "Earth",
};

console.log(user);

// Object destructuring
const product = {
  label: "Notebook",
  price: 300,
  stock: 200,
  salePrice: undefined,
  //   rating: 5,
};

const labelWD = product.label;
console.log("Without destructuring:", labelWD);

const { label, stock } = product; //destructured variable names should match to object properties
console.log("with destructuring:", label);
console.log("with destructuring:", stock);

const { label: newLabel, stock: newStock, rating = 10 } = product; //here if object already have some property called then then it will refer to the objects property value not the one defined here
console.log("with destructuring with modified variable name:", newLabel);
console.log("with destructuring with modified variable name:", newStock);
console.log("with destructuring with modified property name:", rating);

const transaction = (type, { label, price }) => {
  // const {} = myProduct;
  console.log("destructuring inside function:", type, label, price);
};
transaction("order", product);
