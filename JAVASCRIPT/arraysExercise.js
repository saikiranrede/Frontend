// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks


// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function adding(name){
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function removing(name){
  index = roster.indexOf(name);
  if (index > -1){
    roster.splice(index, 1);
  }
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function displaying(){
  console.log(roster);
}


// Start by asking if they want to use the web app
var usage = prompt("Do you want to use the web App? y/n ");
var request = null;

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
if (usage === "y") {
  while (request !== "quit") {
    request = prompt("Enter the action you want to perform: ");
    if (request == "add") {
      var addValue = prompt("Enter the value you want to add: ")
      adding(addValue);
    }else if (request == "remove") {
      var remValue = prompt("Enter the value you want to remove: ")
      removing(remValue);
    }else if (request == "display") {
      displaying();
    }
  }
}else{
  alert("Thanks for visiting this web page. Please refresh to start over");
}


// Use if and else if statements to execute the correct function for each command.
