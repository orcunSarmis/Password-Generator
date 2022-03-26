// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!'#$%&*@~()?/";
var numbers = "1234567890";

var howCharacters;

var passwordLenght="";
var specialChar;
var numeric = "";
var lowC = "";
var upperC = "";
var possibleChar = "";
var randomChar = "";
var userChosenChars = "";
var maxLength = 8;
var maxLength = 128;
var password = "";




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword() {
  
   // Ask user how many character wants in the password.
 var passwordLenght = parseInt(prompt("How many characters would you like your password to contain? ",  "Min:8-Max:129"));

 if (isNaN(passwordLenght)) {
  alert("Please try again with only numbers.");
  generatePassword()
}

  if(passwordLenght < 8 || passwordLenght > 128) {
    alert("Please try again! (Min:8-Max:128)");
    // generatePassword()
  }else {
     var isSymbol = window.confirm("Click OK to confirm including special characters.");

     var isNumbers = window.confirm("Click OK to confirm including numeric characters.");
     var isUpperCase = window.confirm("Click OK to confirm including uppercase characters.");

     var isLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
     
  }
     // This line adds symbols in  userChoseChars
      if(isSymbol) {
        userChosenChars += symbol
        // console.log(userChosenChars);
      }

      // This line adds numbers in  userChoseChars
      if(isNumbers) {
        userChosenChars += numbers
        // console.log(userChosenChars);
      }

      // This line adds upperCase in  userChoseChars 
      if(isUpperCase) {
        userChosenChars += upperCase
        // console.log(userChosenChars);
      }
      
      // This line adds lowerCase in  userChoseChars
      if(isLowerCase) {
      userChosenChars += lowerCase
      
    }


   {
    // This lines add all criteria in password.
    for (var i =0; i<passwordLenght; i++) {
      
      password += userChosenChars[Math.floor(Math.random() * userChosenChars.length) ];
      
    }
   
  }
  
  if( isSymbol || isNumbers || isUpperCase || isLowerCase){

    
  }else {
    alert("You need to select at least one of symbols, numbers, uppercase or lowercase.")
  }

  return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}








 


