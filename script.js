///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

var lowerLetChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChoice = ["!", "@", "#", "$", "%", "^", "&", "*"];
var userChoice = [];

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  // The code below will allow the user to choose the password length and will check if they entered a value between 8 and 128 and if it's a number.
  var passLength = window.prompt("Please type a password length, with a minimum of 8 characters and a maximum of 128 characters.");
  passLength = parseInt(passLength, 10); 
  if (passLength < 8 || passLength > 128) {
    window.alert("Password length must be a number between 8 and 128 characters.");
    return;
  }
  else if (Number.isInteger(passLength) == false) {
    window.alert("Password length must be a number.");
    return;
  }
  // The code below will allow the user to choose what kind of characters they want included in their password.
  if (window.confirm("Would you like to include lowercase characters in your password?") == true) {
    userChoice = userChoice.concat(lowerLetChoice);
  }
  if (window.confirm("Would you like to include uppercase characters in your password?") == true) {
    userChoice = userChoice.concat(upperLetChoice);
  }
  if (window.confirm("Would you like to include numbers in your password?") == true) {
    userChoice = userChoice.concat(numberChoice);
  }
  if (window.confirm("Would you like to include special characters in your password?") == true) {
    userChoice = userChoice.concat(specialChoice);
  }
  if (userChoice.length == 0) {
  window.alert("Please choose at least one character.");
  return;
  }
}