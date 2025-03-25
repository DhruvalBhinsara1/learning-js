//example1

var fruits = {
    'apple': "red",
    'banana': "yellow",
    'grapes': "green"
}

console.log(fruits); // red


//example2

let person = {
    name: "Dhruval",
    tech: "JavaScript",
    laptop: {
        cpu: "R9 5900HX",
        gpu: "RX 6800M 12GB Vram",
        ram: "16GB",
        storage: "1TB SSD",
        brand: "Asus ROG",
        price: "1.5L",
        display: "15.6inch 165Hz",
        resolution: "1440p",
        color: "Kala Damar"
    }
}

console.log(person); // red
console.log(person.laptop); // red
console.log(person.laptop.cpu); // red
console.log(person.laptop.gpu); // red
console.log(person.laptop.ram); // red
console.log(person.laptop.storage); // red
console.log(person.laptop.brand.length); // red


delete person.laptop.price;
console.log(person); // red


let obj=new Object();
obj.name="Dhruval";
obj.age=19;
console.log(obj)