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
 
function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbol =  " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";

  var howCharacters;

  var passwordLenght;
  var specialChar;
  var numeric;
  var lowC;
  var upperC;
  var possibleChar = "";
  var randomChar = "";

  var maxLength = 8;
  var maxLength = 128;
  var password = "";
  var text;

  // Ask user how many character wants in the password.
   passwordLenght = parseInt(prompt("How many characters would you like your password to contain? ",  "Min:8-Max:129"))

if (isNaN(passwordLenght)) {
    alert("Please try again with only numbers.");
    generatePassword()
}else if(passwordLenght < 8 || passwordLenght > 128) {
     alert("Please try again! (Min:8-Max:128)");
     generatePassword()
   }

   specialChar = confirm("Click OK to confirm including special characters.")

   if (specialChar == true) {
    var index = Math.floor(Math.random() * symbol.length);
    possibleChar = symbol[index];
   }

   numeric = confirm("Click OK to confirm including numeric characters.")

   if (numeric == true)  {
    var index = Math.floor(Math.random() * numbers.length);
    numeric = numbers[index];
   }

   lowC = confirm("Click OK to confirm including lower case characters.")

   if (lowC == true) {
    var index = Math.floor(Math.random() * lowerCase.length);
    lowC = lowerCase[index];
   }
   
   upperC = confirm("Click OK to confirm including upper case characters.")

   if (upperC == true) {
    var index = Math.floor(Math.random() * upperCase.length);
    upperC = upperCase[index];
   }

 console.log(passwordLenght, specialChar, numeric, lowC, upperC, possibleChar);






//   var maxLength = window.prompt("How many characters would you like your password to contain? ")

// if (!maxLength) {
  
//   return alert("You must choose at least one character type.");
// } if (maxLength < 8) {

//   return alert("Password lenght must be at least 8 characters." );
// } if (maxLength > 129) {
//   return alert("Password lenght must less than 129 characters.");
// } else 

// var specialCh = window.confirm("Click OK to confirm including special chacters.")
// if (specialCh == true) {
//   return ; 
// } if (specialCh == false) {

//   return alert("You must choose at least one character type."); 
// }

// var low = window.confirm("Click OK to confirm including lowercase chacters.")
// if (low == true) {
// return;
// }

// var upper = window.confirm("Click OK to confirm including uppercase chacters.")



// var password = Math.floor(Math.random() * passwordLength);

// if (howCharacters === passwordLength) {


// }

  return "";
}

