// Assignment code here
//Function to get ammount of characters
var getCharacters = function() {
  var characters = window.prompt("How many characters would you like your password to contain?");
  if((characters > 7) && (characters < 129)) {
    return characters;
  }
  else {
    window.alert("Please enter a numeric value between 8 and 128");
    getCharacters();
  }
}
//Generate Password Function
var generatePassword = function() {
  passLength = getCharacters();
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password?");
  var confirmUpper = window.confirm("Would you like to include Uppercase letters in your password?");
  var confirmNumber = window.confirm("Would you like to include numbers in your password?");
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");

  var typeAmmount = [confirmLower, confirmUpper, confirmNumber, confirmSpecial];
  console.log(confirmLower + confirmUpper + confirmNumber + confirmSpecial);
  for (i = 0; i < passLength; i++)
    if(confirmLower) {
      
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
