// Assignment Code
var generateBtn = document.querySelector("#generate");
  

// function generatePassword() {
//  for passwordChoices ( )

// }

var criteria_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var criteria_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var criteria_numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var criteria_spchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", "_", "`", "{", "|", "}", "~"]
var usr_lowercase_num;
var usr_uppercase_num;
var usr_numeric_num;
var usr_spchar_num;
var total_num = (usr_lowercase_num + usr_lowercase_num + usr_uppercase_num + usr_numeric_num + usr_spchar_num);


generateBtn.addEventListener("click", writePassword);


function generatePassword() {

    var usr_length = prompt("Please enter desired password length");
    console.log(usr_length)
    usr_length = parseInt(usr_length);

    // for (var i = 0; i < usr_length; i++) { // start from i = 0 ----> 9   i < 10() i will stop after 9

        if (usr_length <= 0) {
            alert("Invalid length, must be 8-128 characters");
        }
        else if (usr_length > 128) {
            alert("Invalid length, must be 8-128 characters");
        }
        else (usr_length) 
            for (var i = 0; i < usr_length; i++) 
        
         
        

    var usr_lowercase = confirm("Should password include lowercase letters?");
    console.log(usr_lowercase)
    if (usr_lowercase === true) {
        usr_lowercase_num = criteria_lowercase[Math.floor(Math.random() * criteria_lowercase.length)];
    console.log(typeof usr_lowercase_num)
    } 
    
    else {
        alert("Confrimation: No lowercase letters will be included in your password.")
        
    }

    var usr_uppercase = confirm("Should password include uppercase letters?");
    console.log(usr_uppercase)
    if (usr_uppercase === true) {
       usr_uppercase_num = criteria_uppercase[Math.floor(Math.random() * criteria_uppercase.length)]; 
    console.log(usr_uppercase_num)
      }

    else {
        alert("Confrimation: No uppercase letters will be included in your password")
    }

    var usr_numeric = confirm("Should password include numbers?");
    console.log(usr_numeric)
    if (usr_numeric === true) {
        usr_numeric_num = criteria_numeric[Math.floor(Math.random() * criteria_numeric.length)];
    console.log(typeof usr_numeric_num)
    }

    else {
        alert("Confrimation: No numbers will be included in your password");
    }


var usr_spchar = confirm ("Should password include special characters?");
    console.log(usr_spchar)
    if (usr_spchar === true) {
        usr_spchar_num = criteria_spchar[Math.floor(Math.random() * criteria_spchar.length)];
    console.log(typeof usr_spchar_num)
    }
    else {
        alert("Confirmation: No special characters will be included in your password");
    }
    console.log(usr_lowercase_num + usr_uppercase_num + usr_numeric_num + usr_spchar_num);
}


// for the above criteria = true, execute function and store that value in password
// loop until usr_length is fulfilled, then exit. 
// ask usr_length one time so should be separated from loop




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


   // passwordText.value = password;
    // passwordText.textContent = usr_lowercase_num + usr_lowercase_num + usr_uppercase_num + usr_numeric_num + usr_spchar_num;
    passwordText.textContent = total_num;
}

