// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || (alphabet.length !== 26)) return false; //returns false if 'alphabet' is missing or the length of the 'alphabet' is not 26
    const tempAlphabet = alphabet;
    for (let i = 0; i < alphabet.length; i++) {  //outer loop through each character in substitution'alphabet'
      let count = 0; //this will hold number of times a character shows up in substitution array 'alphabet'
      for (let j = 0; j < alphabet.length; j++) { //inner loop through each character to check for any duplicates of characters
        if (alphabet[i].toLowerCase() === alphabet[j].toLowerCase()) {
          count++;
        }
        if (count > 1) return false; //return false if there is any duplicate characters
      }
    }  
    
    let newInput = "";
    input = input.toLowerCase();
    if (encode) {  //if 'encode' is true then enter these blocks to encode
      //Loop through each character in the 'input'
      for (let i = 0; i < input.length; i++) {
        let addedLetter = input[i];
        for (let j = 0; j < compareArray.length; j++) {
          if (input[i] === compareArray[j]) { //if the character at index 'i' in 'input' matches character at index 'j' in 'compareArray' then continue 
            addedLetter = alphabet[j]; //substitutes character at index 'i' in 'input' for character at index 'j' of substitution array 'alphabet'
          }
        }
        newInput += addedLetter;  // will add substituted letter if character exists in substitution array 'alphabet' or add character at index 'i' of 'input' if there is no subsitution letter provided
      }
    }
    //If 'encode' is false then we want to decode by entering these blocks
    else if (!encode) {
      for (let i = 0; i < input.length; i++) {
        let addedLetter = input[i];
        for (let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) {  //if character at index 'i' of 'input' is equal to character at index 'j' of 'alphabet' then enter these blocks
            addedLetter = compareArray[j]; //set letter to be added to 'newInput' to the value of its original alphabet character
          }
        }
        newInput += addedLetter;
      }
    }
    return newInput;
  }        
                    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
