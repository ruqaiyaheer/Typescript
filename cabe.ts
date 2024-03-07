console.log("outline");
let personName: string ="heer";
console.log("hello", personName,"would you like to take any drink?");

//ex.03
// lowercase
console.log(personName.toLowerCase());

//Uppercase
console.log(personName.toUpperCase());

//tittlecase

let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string = personName.slice(1).toLowerCase();


 let titleCase = firstLetter + restLetter;

 console.log(titleCase);

console.log("Albert einstein once said,\"A person who never made a mistake never tried anything new.\"");

let famousPerson = "Albert Einstein";

let message = "once said, \"A person who never made a mistake never tried anything new.\""

console.log(famousPerson, message);

//ex.07
let whitespaceName = "\n\t Syeda Ruqaiya \t\n";
console.log(whitespaceName);

let withoutwhitespaceName = whitespaceName.trim();

console.log(withoutwhitespaceName)

//ex.08
console.log(4 + 4);

console.log(12 - 4);

console.log(2 * 4);

console.log(16 / 2);

//ex.09
 let favNumber = 10;
 let number = "Mine Favorite Number is:";
 console.log(message, favNumber);

 //ex.10
 //Addition
console.log(4 + 4);

//Subtraction
console.log(12 - 4);

//Multiplication
console.log(2 * 4);

//Division
console.log(16 / 2);

//ex.11
let friendsName = ["fatima","saima","ruqaiya"];

friendsName.forEach(friendName => console.log(friendName));

//ex.12
let guysName = ["fatima", "saima", "ruqaiya"];

guysName.forEach(guyName => console.log(`Hello ${guyName},How are you?`));

//ex.13
let transportationModes = ["sport car", "bike","bicyle", "car",];

transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));

//ex.14
let guestList = ["moiz", "ruqaiya", "hareem"];

guestList.forEach(oneGuest => console.log(`salaam ${oneGuest}, would you like to dinner with me?`));