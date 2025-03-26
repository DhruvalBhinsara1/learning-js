//The keywod const does not define a const value. it defines a constant reference to a value.

//using const you cannot: 
//--->Reassign a const value
//--->Reassign a const object
//--->Reassign a const array


//using const you can:
//--->Change the properties of a const object
//--->Change the elements of a const array



//const array

const car = ["BMW", "Audi", "Mercedes"];
console.log(car);

car[3] = "Toyota";
console.log(car);

//push method

car.push("Aston Martin");
console.log(car);

//pop method

car.pop();
console.log(car);
//const object

const car1 = { type: "BMW", model: "M5", color: "CARBON BLACK" };
car1.color = "WHITE";
car1.owner = "DHRUVAL";
console.log("Car is owned by " + car1.owner);
console.log("\n", car1);