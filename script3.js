// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// //function writePassword() {wer
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

  
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// if no getLow, getUpp, getNum, getSpec, getHan, getTib, and getDev. 

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowEl = document.getElementById('low');
const uppEl = document.getElementById('upp');
const numEl = document.getElementById('num');
const specEl = document.getElementById('spec');
const hanEl = document.getElementById('han');
const tibEl = document.getElementById('tib');
const devEl = document.getElementById('dev');
const generateEl = document.getElementById('generate');

const randomFunc = {
  low: getLow,
  upp: getUpp,
  num: getNum,
  spec: getSpec,
  han: getHan,
  tib: getTib,
  dev: getDev
}

//Use random number gen to get a character from the functions and have lots if statements
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
	const hasLow = lowEl.checked;
	const hasUpp = uppEl.checked;
	const hasNum = numEl.checked;
  const hasSpec = specEl.checked;
  const hasHan = hanEl.checked;
  const hasTib = tibEl.checked;
  const hasDev = devEl.checked
resultEl.innerText = generatePassword (hasLow, hasUpp, hasNum, hasSpec, hasHan, hasTib, hasDev, length)
});

function generatePassword(low, upp, num, sym, han, tib, dev, length) {
	let generatedPassword = '';
	const typesCount = low + upp + num + sym + han + tib + dev;
  const typesArr = [{low}, {upp}, {num}, {spec} ,{han}, {tib}, {dev}]
  .filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+= typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}



// FUNCTIONS FOR GETTING RANDOM CHARACTERS
function getLow() {
  var lowArray = "abcdefghijklmnopqrstuvwxyz";
  return lowArray[Math.floor(Math.random() * lowArray.length)]
    
};

function getUpp() {
  var uppArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppArray[Math.floor(Math.random() * uppArray.length)]
  
};
// getUpp();

function getNum() {
  var numArray = "1234567890";
  return numArray[Math.floor(Math.random() * numArray.length)]
  
};
// getNum();

function getSpec() {
  var specArray = "!@#$%^&*()'*'";
  return specArray[Math.floor(Math.random() * specArray.length)]
};
// getSpec();

function getHan(){
  var hanArray =  "斡晦魄環照劍號巨闕珠稱夜光墨悲絲染詩讚羔羊升階納陛弁轉疑星貽厥嘉猷勉";
  return hanArray[Math.floor(Math.random() * hanArray.length)]
};

function getTib(){
  var tibArray =  "ཅཏཔཙཞརཧཆཐཕཚཟལཇདབཛའཤཉནམཝཡསཀ";
  return tibArray[Math.floor(Math.random() * tibArray.length)]
};
// getTib();

function getDev(){
  var devArray =  "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह";
  return devArray[Math.floor(Math.random() * devArray.length)] 
};
// getDev();


