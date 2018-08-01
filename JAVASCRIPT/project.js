var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
var age = prompt("Enter your age: ")
var height = prompt("Enter your height in cm: ")
var petName = prompt("Enter your pet's name: ")
alert("Thanks for entering your details")

nameCond = null;
ageCond = null;
heightCond = null;
petCond = null;

if (firstName[0] === lastName[0]) {
  nameCond = true;
}else {
  nameCond = false;
}

if (age > 20 && age <30) {
  ageCond = true;
} else {
  ageCond = false;
}

if (height >= 170) {
  heightCond = true;
} else {
  heightCond = false;
}

if (petName[petName.length - 1] == "y") {
  petCond = true;
} else {
  petCond = false;
}

if(nameCond && heightCond && ageCond && petCond){
  console.log("Welcome Dumbass!!!");
}else {
  alert("Not Him")
}
