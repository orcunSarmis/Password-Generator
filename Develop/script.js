// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbol =  "!'#$ %& *@~()?/";
var numbers = "1234567890";

var howCharacters;

var passwordLenght="";;
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
    for (var i =0; i<userChosenChars.length; i++) {
      password += userChosenChars[Math.floor(Math.random()) * userChosenChars.length];
      // console.log(password);
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








   // // password += Symbol.charAt(Math.floor(Math.random()) * passwordLenght);
    // password += upperCase.charAt(Math.floor(Math.random()) * passwordLenght);
    // password += lowerCase.charAt(Math.floor(Math.random()) * passwordLenght);


// console.log(passwordLenght, specialChar, numeric, lowC, upperC, possibleChar);
  // if(isSymbol) {
  //   var index = Math.floor(Math.random() * symbol.length);
  //     possibleChar = symbol[index];
  // }

  // if(isNumeric) {
  //   var index = Math.floor(Math.random() * numbers.length);
  //     numeric = numbers[index];
  // }

  // // if(isUpperCase) {
  // //   var index = Math.floor(Math.random() * upperCase.length);
  // //     upperC = upperCase[index];
  // // }

  // if(isLowerCase){
  //   var index = Math.floor(Math.random() * lowerCase.length);
  //   lowC = lowerCase[index];
  // }

//    specialChar = confirm("Click OK to confirm including special characters.")

//    if (specialChar == true) {
//     var index = Math.floor(Math.random() * symbol.length);
//     possibleChar = symbol[index];
//    }

//    numeric = confirm("Click OK to confirm including numeric characters.")

//    if (numeric == true)  {
//     var index = Math.floor(Math.random() * numbers.length);
//     numeric = numbers[index];
//    }

//    lowC = confirm("Click OK to confirm including lower case characters.")

//    if (lowC == true) {
//     var index = Math.floor(Math.random() * lowerCase.length);
//     lowC = lowerCase[index];
//    }
   
//    upperC = confirm("Click OK to confirm including upper case characters.")

//    if (upperC == true) {
//     var index = Math.floor(Math.random() * upperCase.length);
//     upperC = upperCase[index];
//    }

//  console.log(passwordLenght, specialChar, numeric, lowC, upperC, possibleChar);






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


