// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  /*Function 'areValidFunctionArguments' is a helper function for 'substitution'. This will return false if 'alphabet' is missing, is not length 26, or there are not all unique characters in array. Else return true. */
  function areValidFunctionArguments(alphabet) {
    let isValid = true;
    if (!alphabet || (alphabet.length !== 26)) return false; //returns false if 'alphabet' is missing or the length of the 'alphabet' is not 26

    for (let i = 0; i < alphabet.length; i++) {  //outer loop through each character in substitution'alphabet'
      let count = 0; //this will hold number of times a character shows up in substitution array 'alphabet'
      for (let j = 0; j < alphabet.length; j++) { //inner loop through each character to check for any duplicates of characters
        if (alphabet[i].toLowerCase() === alphabet[j].toLowerCase()) {
          count++;
        }
        if (count > 1) return false; //return false if there is any duplicate characters
      }
    }
    return isValid;
  }
  
  /*Function 'cipherOrDecipher' is a helper function to 'substitution' and will take in an input string to be either ciphered or deciphered by substitution and an 'outerArray' then 'innerArray'. If 'outerArray' holds the regular alphabet array then the function will be encoding. If 'outerArray' holds the substitution alphabet then the function will be decoding. */
  function cipherOrDecipher(input, outerArray, innerArray) {
  let newInput = "";  //deciphered or ciphered string that will be returned
  for (let i = 0; i < input.length; i++) {  //outer for loop through string to be ciphered/deciphered
        let addedLetter = input[i];  //set letter to add to returned string
        for (let j = 0; j < outerArray.length; j++) {
          if (input[i] === outerArray[j]) { //if the character at index 'i' in 'input' matches character at index 'j' in 'outerArray' then continue 
            addedLetter = innerArray[j];  //set letter to add to returned string
          }
        }        
        newInput += addedLetter;  // add letter to string that will be returned at end of function
  }
  return newInput;
}

  const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  /*Returns a ciphered string if 'encode' is true or missing and returns a deciphered string if 'encode' is false. */
  function substitution(input, alphabet, encode = true) {
    //checks whether function arguments are valid
    let areValid = areValidFunctionArguments(alphabet); 
    if (!areValid) {
      return areValid;
    }
    else {    
      let newInput = "";
      input = input.toLowerCase();
      if (encode) { //if 'encode' is true then enter these blocks to encode
        newInput = cipherOrDecipher(input, compareArray, alphabet);
      }
      else if (!encode) { //if 'encode' is false then enter these blocks to decode
        newInput = cipherOrDecipher(input, alphabet, compareArray);
      }
      return newInput;
    }
  }
                      
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
