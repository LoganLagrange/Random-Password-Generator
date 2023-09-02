// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var parameters = {
    length: 0,
    lowerUpper: false,
    numeric: false,
    specChar: false
  }

  // Prompt for length of password, stores in object
  parameters.length = Number(window.prompt("How many characters would you like your password to be? min:8 max:128"));
  console.log(parameters.length);

  // Prompt for upper or lower case  characters
  parameters.lowerUpper = window.confirm("Would you like to include lower and upper case characters?");
  console.log(parameters.lowerUpper);

  // Prompt for numeric characters
  parameters.numeric = window.confirm("Would you like to include numbers?");
  console.log(parameters.numeric);

  // Prompt for special characters
  parameters.specChar = window.confirm("Would you like to include special characters?");
  console.log(parameters.specChar);
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
