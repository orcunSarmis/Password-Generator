// Assignment Code

// This line returns to generate which is with id slector within document with querySelector method,
// and store in generateBtn.
var generateBtn = document.querySelector("#generate");

// This lines create variables that fucntion use.
var upperCase = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!'#$%&*@~]()?[_+{/<>}-";
var numbers = "1234567890";
var passwordLenght="";
var userChosenChars = "";
var maxLength = 8;
var maxLength = 128;
var password = "";



// var howCharacters;
// var specialChar;
// var possibleChar = "";
// var upperC = "";
// var lowC = "";
// var randomChar = "";




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword() {
  
   //this line asks user how many character wants in the password.
 var passwordLenght = parseInt(prompt("How many characters would you like your password to contain? ",  "Min:8-Max:129"));

//  This lines checks user input is numbers or ewmpty.
 if (isNaN(passwordLenght)) {
  alert("You have to enter numbers Min:8-Max:129.");
  return;
  
}

//  This lines checks user input lenght if is in min and max numbers.
  if(passwordLenght < 8 || passwordLenght > 128) {
    alert("Please try again! (Min:8-Max:128)");
    return;
    
  }else { // This lines
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
  
  // This lines check user's input if it's match all criteria.
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
  // This lines check if password does not equal empty string or null or undefined.
if (!password == null || !password == undefined || !password == "") {
  passwordText.value =  password;
}
  // passwordText.value = password;

}








 


