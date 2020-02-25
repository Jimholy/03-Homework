// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {wer
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if no getLow, getUpp, getNum, getSpec, getHan, getTib, and getDev. 

//Use random number gen to get a character from the functions and have lots if statements

  
function getLow() {
    var lowArray = "abcdefghijklmnopqrstuvwxyz";
    return lowArray[Math.floor(Math.random() * lowArray.length)]
    
};

function getUpp() {
  var uppArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(uppArray[Math.floor(Math.random() * uppArray.length)])
  
};
getUpp();

function getNum() {
  var numArray = "1234567890";
  console.log(numArray[Math.floor(Math.random() * numArray.length)])
  
};
getNum();

function getSpec() {
  var specArray = "!@#$%^&*()'*'";
  console.log(specArray[Math.floor(Math.random() * specArray.length)])
};
getSpec();

function getHan(){
  var hanArray =  "斡晦魄環照劍號巨闕珠稱夜光墨悲絲染詩讚羔羊升階納陛弁轉疑星貽厥嘉猷勉";
  return hanArray[Math.floor(Math.random() * hanArray.length)]
};

function getTib(){
  var tibArray =  "ཅཏཔཙཞརཧཆཐཕཚཟལཇདབཛའཤཉནམཝཡསཀ";
  console.log(tibArray[Math.floor(Math.random() * tibArray.length)])
};
getTib();

function getDev(){
  var devArray =  "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
  console.log(devArray[Math.floor(Math.random() * devArray.length)])
};
getDev();






//finish writing the remaing arrays
//

// test every thingy, we use
//    String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
//    String specialCharacters = "!@#$"()*:"{}';
//    String numbers = "1234567890";
//    String glyphs ="天地玄黃宇宙洪荒蓋此身髮四大五常都邑華夏東西二京治本於侬廉退顛沛匪虧曠遠綿邈岩岫杳冥性靜情逸心動神疲"

//    String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers +glyphs;
      
/// console.log(Math.floor(Math.random() * 10))
      //random number generator 0-4 (variables)
      //random number generator
        // string.length for the flexible choices within the length
        // += to combine the characters  

//  for(int i = 4; i< length ; i++) 
//    password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
//  } return password;}}

// alert ("Your password must contain at least  special character, uppercase, lowercase, number and three non-latin characters.");

// var arr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890","!@#$%^&*()'*'" ,"本於侬廉退顛沛匪虧曠遠綿邈岩岫杳冥性靜情逸心動神疲", "ཅཏཔཙཞརཧཆཐཕཚཟལཇདབཛའཤཉནམཝཡསཀ","कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह"]

//  console.log(Math.floor(Math.random() * nameArray.length))