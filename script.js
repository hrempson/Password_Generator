// Assignment Code
var generateBtn = document.querySelector ('#generate');
var options_form = document.querySelector ('#password-options');
var inputRangeLength = document.querySelector ('#rangeLength');

// function generatePassword() {
//  for passwordChoices ( )

// }

const criteria_lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const criteria_uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const criteria_numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const criteria_spchar = [
  '!',
  '#',
  '$',
  '%',
  '&',
  '(',
  ')',
  '*',
  '+',
  '-',
  '.',
  '/',
  '<',
  '>',
  '?',
  '@',
  '^',
  '_',
  '~',
];
var usr_lowercase_num = '';
var usr_uppercase_num = '';
var usr_numeric_num = '';
var usr_spchar_num = '';
var usr_lowercase,
  usr_uppercase,
  usr_numeric,
  usr_spchar,
  individual_password_length,
  extra_password;
var total_num = '';

generateBtn.addEventListener ('click', writePassword);
inputRangeLength.addEventListener ('input', handleInputRangeLengthChange);
inputRangeLength.addEventListener ('load', handleRangeLengthLoad);
options_form.addEventListener ('submit', generatePassword);
function handleInputRangeLengthChange (e) {
  document.querySelector ('#lengthText').innerText = e.target.value;
  //console.log (e.target.value);
}

function handleRangeLengthLoad (e) {
  debugger;
  document.querySelector ('#lengthText').innerText = e.target.value;
}

function usr_prompt () {
  var options = 0;
  usr_length = parseInt (inputRangeLength.value);

  //   = parseInt (prompt ('Please enter desired password length'));
  //   if (!usr_length) {
  //     return alert ('Invalid type');
  //   }
  //   if (usr_length < 8 && usr_length > 128) {
  //     return alert ('Invalid length, must be 8-128 characters');
  //   }

  usr_lowercase = document.querySelector ('#checkLowerCase').checked;
  //confirm ('Should password include lowercase letters?');
  if (usr_lowercase) options++;

  usr_uppercase = document.querySelector ('#checkLowerCase').checked;
  //confirm ('Should password include uppercase letters?');
  if (usr_uppercase) options++;

  usr_numeric = document.querySelector ('#checkNumbers').checked;
  //confirm ('Should password include numbers?');
  if (usr_numeric) options++;

  usr_spchar = document.querySelector ('#checkSpecial').checked;
  //confirm ('Should password include special characters?');
  if (usr_spchar) options++;

  individual_password_length = Math.floor (usr_length / options);
  extra_password = usr_length % options;
  console.log (individual_password_length, extra_password);
}

function generatePassword () {
  usr_prompt ();
  //   console.log (usr_numeric);
  //   console.log (usr_uppercase);
  //   console.log (usr_lowercase);
  //   console.log (usr_length);
  //   console.log (usr_spchar);

  if (usr_lowercase === true) {
    individual_password_length1 = individual_password_length + extra_password;
    for (var i = 0; i < individual_password_length1; i++) {
      usr_lowercase_num +=
        criteria_lowercase[
          Math.floor (Math.random () * criteria_lowercase.length)
        ];
    }
  }

  if (usr_uppercase === true) {
    for (var i = 0; i < individual_password_length; i++) {
      usr_uppercase_num +=
        criteria_uppercase[
          Math.floor (Math.random () * criteria_uppercase.length)
        ];
    }
  }

  if (usr_numeric === true) {
    for (var i = 0; i < individual_password_length; i++) {
      usr_numeric_num +=
        criteria_numeric[Math.floor (Math.random () * criteria_numeric.length)];
    }
  }
  if (usr_spchar === true) {
    for (var i = 0; i < individual_password_length; i++) {
      usr_spchar_num +=
        criteria_spchar[Math.floor (Math.random () * criteria_spchar.length)];
    }
  }

  total_num =
    usr_lowercase_num + usr_uppercase_num + usr_numeric_num + usr_spchar_num;
  return total_num;
}

// Write password to the #password input
function writePassword () {
  total_num = '';
  usr_lowercase_num = '';
  usr_uppercase_num = '';
  usr_numeric_num = '';
  usr_spchar_num = '';
  var password = generatePassword ();
  console.log (password);
  var passwordText = document.querySelector ('#password');

  password = password
    .split ('')
    .sort (function () {
      return 0.5 - Math.random ();
    })
    .join ('');
  passwordText.value = password;
  //  passwordText.textContent = usr_lowercase_num + usr_uppercase_num + usr_numeric_num + usr_spchar_num;
  // passwordText.textContent = ;
}
