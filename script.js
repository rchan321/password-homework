// Assignment code here

// Arrays of possible character options
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0", "1", "2","3","4","5","6","7","8","9"]
var specialCharacters = ["!","@","#","$","%","^","&","*", "(",")","-","+","=","<",">","?","/" ]

function generatePassword() {
  var length = window.prompt("Choose a password length of between 8 to 128 characters.");

  var askUpperCase = confirm("Do you want your password to include upper case letters?");
  var askLowerCase = confirm("Do you want your password to include lower case letters?");
  var askNumbers = confirm("Do you want your password to include numbers?");
  var askSpecialChar = confirm("Do you want your password to include special characters?");

  console.log(chosenCharacter)
  
  return chosenCharacter;
}
  
  "Do you want to include lowercase letters?"
  // if answer True, "Password will include at least 1 lowercase letter", include at least 1 lowercase letter. else False

  "Do you want to include uppercase letters?"
  // if answer True, "Password will include at least 1 uppercase letter", include at least 1 uppercase letter. else False

  "Do you want to include numbers?"
  // if answer True, "Password will include at least 1 number", include at least 1 number. else False

  "Do you want to include special characters?"
  //if answer True, "Password will include at least 1 special character", include at least 1 special character. else False


function getRandomChar(array){
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomChar = array[randomIndex]
  return randomChar;
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
