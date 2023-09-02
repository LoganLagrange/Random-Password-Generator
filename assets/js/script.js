// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var parameters = {
    length: 8,
    lower: false,
    upper: false,
    numeric: false,
    specChar: false
  }

  // Prompt for length of password, stores in object
  parameters.length = Number(window.prompt("How many characters would you like your password to be? min:8 max:128"));
  console.log(parameters.length);

  // Prompt for lower case  characters
  parameters.lower = window.confirm("Would you like to include lower case characters?");
  console.log(parameters.lower);

  // Prompt for upper case characters
  parameters.upper = window.confirm("Would you like to include upper case characters?");
  console.log(parameters.upper);

  // Prompt for numeric characters
  parameters.numeric = window.confirm("Would you like to include numbers?");
  console.log(parameters.numeric);

  // Prompt for special characters
  parameters.specChar = window.confirm("Would you like to include special characters?");
  console.log(parameters.specChar);

  function generatePassword() {
    var pWord = " ";
    var characters = " ";
    if (parameters.specChar && parameters.numeric && parameters.lower && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar && parameters.numeric && parameters.lower){
      characters = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar && parameters.numeric && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar && parameters.lower && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.numeric && parameters.lower && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.lower && parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar && parameters.numeric) {
      characters = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.numeric && parameters.lower) {
      characters = "abcdefghijklmnopqrstuvwxyz1234567890";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.numeric && parameters.upper) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.lower && parameters.specChar) {
      characters = "abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.specChar){
      characters = "!#$%&()*+,-./:;<>=?@{}[]|\^~";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.upper){
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.numeric) {
      characters = "1234567890";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else if (parameters.lower) {
      characters = "abcdefghijklmnopqrstuvwxyz";
      for ( var  i = 0; i < parameters.length; i++){
        pWord += characters.charAt(Math.floor(Math.random()*characters.length));
      }
      console.log(pWord);
    } else {
      pWord = null;
      window.alert("Password creation failed, need to  select at least 1 criteria");
    }
    return pWord;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
