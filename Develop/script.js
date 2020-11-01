// ASSIGNMENT CODE STARTS HERE
//Function to get ammount of characters
var getCharacters = function() {
  var characters = window.prompt("How many characters would you like your password to contain?");
  if((characters > 7) && (characters < 129)) {
    return characters;
  }
  //Ensure the user can't input an invalid response
  else {
    window.alert("Please enter a numeric value between 8 and 128");
    getCharacters();
  }
}

//Generate Password Function
var generatePassword = function() {
  passLength = getCharacters();
  //Ask the user which characters they would like in their password
  var confirmLower = window.confirm("Would you like to include lowercase letters in your password?");
  var confirmUpper = window.confirm("Would you like to include Uppercase letters in your password?");
  var confirmNumber = window.confirm("Would you like to include numbers in your password?");
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");

  //Determine how many types of characters the user chose
  var typeAmmount = (confirmLower + confirmUpper + confirmNumber + confirmSpecial);
}

//Assign characters to an array of their character type
var charRange = function(low, high) {
var array = [];
for (let i = low; i <=high; i++) {
  array.push(i);
}
return array;
}

//Determine which characters to use based on their Ascii values
var asciiLower = charRange(97, 122)
var asciiUpper = charRange(65, 90)
var asciiNumber = charRange(48, 57)
var asciiSpecial = charRange(33, 47).concat(
  charRange(58, 64)
  ).concat(
  charRange(91,96)
  ).concat (
  charRange(123, 126)
)

console.log(asciiLower, asciiUpper, asciiNumber, asciiSpecial);


//END OF ASSIGNMENT CODE

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
