// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria_length = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var passwordChoices = [criteria_length, criteria_lowercase, criteria_uppercase, criteria_numeric]




var criteria_length = 8
var criteria_lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" , "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var criteria_uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var criteria_numeric = [0]
var criteria_spchar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"]


// length : must be between 8-128
for (var i = 8; i <= 128; i++) {
    var user_length = criteria_length[Math.floor(Math.random() * criteria_length.length)];
}

for (var criteria_numeric = 0; criteria_numeric >= 9; criteria_numeric++) {
        var usr_numeric = criteria_numeric[Math.floor(Math.random() * criteria_numeric.length)];
}

// special characters : must be
//for (var usr_lowercase = criteria.criteria_lowercase[Math.floor(Math.random() * criteria_lowercase.length)];
    
//var criteria_lowercase = usr_lowercase
//var criteria_uppercase = usr_uppercase
//var criteria_numeric = usr_numeric
//var criteria_spchar = usr_spchar


var usr_length = prompt("Please enter desired password length");
    usr_length = parseInt(usr_length);


var usr_lowercase = confirm("Should password include lowercase letters?");
   if (usr_lowercase === true) {
    usr_lowercase = criteria_lowercase[Math.floor(Math.random() * criteria_lowercase.length)]; 
   }
   else {
    alert("Confrimation: No lowercase letters will be included in your password.")
   }


var usr_uppercase = confirm("Should password include uppercase letters?");
    if (usr_uppercase === true) {
       usr_lowercase = criteria_uppercase[Math.floor(Math.random() * criteria_uppercase.length)]; 
      }
    else {
        alert("Confrimation: No uppercase letters will be included in your password")
    }


var usr_numeric = confirm("Should password include numbers?");
    if (usr_numeric === true) {
        usr_numeric = criteria_numeric[Math.floor(Math.random() * criteria_numeric.length)];
    }
    else {
        alert("Confrimation: No numbers will be included in your password");
    }


var usr_spchar = confirm ("Should password include special characters?");
    if (usr_spchar === true) {
        usr_spchar = criteria_spchar[Math.floor(Math.random() * criteria_spchar.length)];
}
    else {
        alert("Confirmation: No special characters will be included in your password");
    }





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
