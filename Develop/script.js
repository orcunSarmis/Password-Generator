// Assignment Code
var generateBtn = document.querySelector("#generate");

 
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbol =  " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var passwordLength = 129;
  var password = "";
  var text;

  // Ask user how many character wants in the password.
  var howCharacters = window.prompt("How many characters would you like your password to contain? ")
  
  
  

if (!howCharacters) {
  return alert("You must choose at least one character type.");

} if (passwordLength < 8) {

  return alert("Password lenght must be at least 8 characters." );
} if (passwordLength > 129) {
  return alert("Password lenght must less tahn 129t characters.");
}

var specialCh = window.confirm("Click OK to confirm including special chacters.")
if (specialCh == true) {
  return ; 

} if (specialCh == false) {
  return alert("You must choose at least one character type.");
}

var low = window.confirm("Click OK to confirm including lowercase chacters.")

var upper = window.confirm("Click OK to confirm including uppercase chacters.")



// var password = Math.floor(Math.random() * passwordLength);

// if (howCharacters === passwordLength) {


// }

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