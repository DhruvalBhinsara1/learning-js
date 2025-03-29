fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is a fruit");
        break;
    case "mango":
        console.log("Mango is a fruit");
    case "banana":
        console.log("Banana is a fruit");
        break;
    default:
        console.log("We don't know that fruit");
}

//output will have mango and banana because of fall through