// Assignment Code
var passwordEl = document.querySelector("#password");
var btngenerate = document.querySelector("#generate");

btngenerate.addEventListener("click", function () {
   
    //Prompt to get desired character length
    var charLength = prompt("How many characters would you like your new password to be? Pick a number between 10 and 50.");

    if ((charLength >= 10) && (charLength <= 50)) {

        //variables for password generater
        let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
        let numbers = "0123456789";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let newPassword = "";

        //which type of characters user can choose from.
        let genSymbols = confirm("Would you like to use special characters? i.e. (!, $, %, etc.)");
        let genNumbers = confirm("Would you like to use numbers?");
        let genLowerCase = confirm("Would you like to use lowercase letters?");
        let genUpperCase = confirm("Would you like to use uppercase letter?");

        var allCharacters = symbols + numbers + lowerCase + upperCase;

        //create if and else statments for password combos
        if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
          for (i = 0; i < charLength; i++) {
              let character = Math.floor(Math.random() * allCharacters.length);
              newPassword += allCharacters.charAt(character, character + 1);
          }
      }

        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * symbols.length);
                newPassword += symbols.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * numbers.length);
                newPassword += numbers.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * lowerCase.length);
                newPassword += lowerCase.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * upperCase.length);
                newPassword += a.charAt(character, character + 1);
            }
        }

        password.textContent = newPassword;
    }

})
