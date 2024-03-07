console.log("outline");
var personName = "heer";
console.log("hello", personName, "would you like to take any drink?");
// lowercase
console.log(personName.toLowerCase());
//Uppercase
console.log(personName.toUpperCase());
//tittlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetter;
console.log(titleCase);
console.log("Albert einstein once said,\"A person who never made a mistake never tried anything new.\"");
var famousPerson = "Albert Einstein";
var message = "once said, \"A person who never made a mistake never tried anything new.\"";
console.log(famousPerson, message);
//ex.07
var whitespaceName = "\n\t Syeda Ruqaiya \t\n";
console.log(whitespaceName);
var withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);
//ex.08
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
//ex.09
var favNumber = 10;
var number = "Mine Favorite Number is:";
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
var friendsName = ["fatima", "saima", "ruqaiya"];
friendsName.forEach(function (friendName) { return console.log(friendName); });
//ex.12
var guysName = ["fatima", "saima", "ruqaiya"];
guysName.forEach(function (guyName) { return console.log("Hello ".concat(guyName, ",How are you?")); });
//ex.13
var transportationModes = ["sport car", "bike", "bicyle", "car",];
transportationModes.forEach(function (mode) { return console.log("I would like to own a ".concat(mode)); });
//ex.14
var guestList = ["moiz", "ruqaiya", "hareem"];
guestList.forEach(function (oneGuest) { return console.log("salaam ".concat(oneGuest, ", would you like to dinner with me?")); });
