// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' , 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 function caesar(input, shift, encode = true) {
   let newInput = "";
     //If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
     try {
       if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
      }
     catch (error) {
       return `An error occurred: ${error}`;
     }
       input = input.toLowerCase();
         for (let i = 0; i < input.length; i++) {
             let addedLetter = input[i];  //will hold value after shift to add to new input
             let shiftIndex = shift;  //the index of alphabet element we want after the shift
             if (!encode) {  //if we decode then we multiply 'shiftIndex' by -1
                   shiftIndex *= -1;
             }
             for (let j = 0; j < alphabet.length; j++) {
               if (input[i] == alphabet[j]) {  //if character of input at index 'i' is equal to character at alphabet array index 'j'
                 shiftIndex += j;  //add index value 'j' to get index of shifted letter from alphabet array
                 addedLetter = alphabet[shiftIndex];  //set our value of shifted letter
                 if (shiftIndex > 25) {  //if shift passes z on to beginning of alphabet
                   shiftIndex -= 26; //adjust index
                   addedLetter = alphabet[shiftIndex];
                 }
                 if (shiftIndex < 0) {  //if shift passes a and returns to the end of alphabet "z"
                   shiftIndex += 26; //adjust index 
                   addedLetter = alphabet[shiftIndex];
                 }
               }
             }
             newInput += addedLetter; //add shifted letter to 'newInput' that eventually gets returned
         }         
         return newInput;
   }
 
   return {
     caesar,
   };
 })();

module.exports = { caesar: caesarModule.caesar };
