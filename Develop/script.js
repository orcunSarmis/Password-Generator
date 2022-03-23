// Assignment Code
var generateBtn = document.querySelector("#generate");

 

function generatePassword(howCharacters, speCharacter) {
  var passwordLength = 129;
  var speCharacter = "!'#()*+,-.%/:;<=>?@&[\]$^_`{|}~";
  var password = "";
  var text;

  // Ask user how many character wants in the password.
  var howCharacters = window.prompt("How many characters would you like your password to contain? ")


if (!howCharacters) {
  return alert("You Must choose at least one character type.");

} else if (passwordLength < 8) {
  return alert("Password lenght must be at least 8 characters." );
} else {
  var speCharacter = window.prompt("Click ok to confirm including special characters.")
}

var password = Math.floor(Math.random() * passwordLength);

if (howCharacters === passwordLength) {


}

  return ""
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);