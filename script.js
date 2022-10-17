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
// These variables represent the different options for the password character types that the user can choose from.
var lowerLetChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChoice = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  // The code below will allow the user to choose the password character length and will check if they entered a value between 8 and 128 and if it's a number.
  var passLength = window.prompt("Please specify a password character length, with a minimum of 8 characters and a maximum of 128 characters.");
  passLength = parseInt(passLength, 10); 
  if (passLength < 8 || passLength > 128) {
    window.alert("Password character length must be a number between 8 and 128 characters.");
    return("Please try again.");
  }
  else if (Number.isInteger(passLength) == false) {
    window.alert("Password character length must be a number.");
    return("Please try again.");
  }
  // The code below declares an empty array variable that the user will confirm their character options into.
  var userChoice = [];
  // The code below will use if statements to allow the user to choose what kind of characters they want included in their password.
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
  // The code below will check if the user picked any of the options for password characters. If not, it returns the function.
  if (userChoice.length == 0) {
  window.alert("Please choose at least one type of character.");
  return("Please try again.");
  }
  // The code below will declare a new variable to be the end result password. Then it will add and assign randomly selected characters from the user's 
  // choices into that variable until the length of the password matches the number selected by the user for password length. Then it returns the function.
  var password = [];
  do{
    password += userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  while (password.length < passLength);
  return password;
}