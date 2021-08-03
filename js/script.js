// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
var specialCharacters = ["!","@","#","$","%","&","*","(",")","?","+","=","-","[","]","{","}","<",">","/",",",".","`",";",":","|"]
var upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [1,2,3,4,5,6,7,8,9,0]

// Assignment code here


// Get references to the #generate element


// THEN I am presented with a series of prompts for password criteria
function passwordCriteria(){
    var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);
    if (Number.isNaN(length)) {
        alert("Password length must be provided as a numnber")
    return null;
    }
    if (length < 8){
        alert("length must be at least 8 characters");
        return null;
    }
    if (length > 128) {
        alert("length must be less than 128 characters");
        return null;
    }
    var hasSpecialCharacters = confirm("Click okay if you would like to use special characters?");
    var hasUpperCase = confirm("Click okay if you would like to use uppercase characters?");
    var hasLowerCase = confirm("Click okay if you would like to use lowercase characters?");
    var hasNumbers = confirm("Click okay if you would like to use numbers?");
    if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSpecialCharacters === false){
        alert("You must choose at least 1 of the password criteria");
        return null;
    }

var userInput = {
    length:length,
    hasUpperCase:hasUpperCase,
    hasLowerCase:hasLowerCase,
    hasNumbers:hasNumbers,
    hasSpecialCharacters:hasSpecialCharacters
}
return userInput;
}
function getRandom(arr){
    var randomIndex = Math.floor(Math.random()*arr.length)
    var randomElement = arr[randomIndex];
    return randomElement;
}
function generatePassword(){
    var options = passwordCriteria();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (options.hasSpecialCharacters){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters))
        }
    if (options.hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
        guaranteedCharacters.push(getRandom(numbers))
    }

    if (options.hasUpperCase) {
        possibleCharacters = possibleCharacters.concat(upperCase);
        guaranteedCharacters.push(getRandom(upperCase))
    }
    if (options.hasLowerCase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
        guaranteedCharacters.push(getRandom(lowercase))
        return possibleCharacters.join('');

        }
        
    console.log(possibleCharacters);
    
//Create a for loop for the length of the pswdgen
for (let i = 0; i < options.length; i++) {
   var possibleCharacter = getRandom(possibleCharacters);
   result.push(possibleCharacter);
}

 for  (let i = 0; i < guaranteedCharacters.length; i++) {
     result[i] = guaranteedCharacters[i];
 }

//push all possible characters into results array
return result.join('');
}
// WHEN prompted for password criteria



// THEN I select which criteria to include in the password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN prompted for the length of the password



// THEN I choose a length of at least 8 characters and no more than 128 characters



// WHEN asked for character types to include in the password


// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt


// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered


// THEN a password is generated that matches the selected criteria


// WHEN the password is generated



// THEN the password is either displayed in an alert or written to the page


