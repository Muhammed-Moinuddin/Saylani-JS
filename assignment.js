///////////////////////    1    ///////////////////////////
let a = 32243;
let b = "";
function reverseString(a) {
  let c = a.toString();
  for (let i = c.length - 1; i >= 0; i--) {
    b = b+c[i];
  }
  return parseInt(b);
};
console.log(reverseString(a));

///////////////////////    2    ///////////////////////////
let palindromeString = "madam";
let palindromeCheckString = "";
function checkPalindrome(palindromeString) {
  for (let i = palindromeString.length - 1; i >= 0; i--) {
    palindromeCheckString = palindromeCheckString + palindromeString[i];
  }
  if (palindromeCheckString === palindromeString) {
      return ("The String is Palindrome");
  } else {
    return ("The String is not a Palindrome")
  }
}
console.log(checkPalindrome(palindromeString));

///////////////////////    3    ///////////////////////////
let combinationString = "dog";
let arrayCombinationString = [];
function checkCombination(combinationString){
  for (let i = 0; i < combinationString.length; i++) {
    for (let j = i; j < combinationString.length; j++) {
      arrayCombinationString.push(combinationString.substring(i,j+1));
    }
  
  }
  return arrayCombinationString.toString()
};
console.log(checkCombination(combinationString));

///////////////////////    4    ///////////////////////////
let orderString = "webmaster";
let checkOrderString = "";
function checkAlphabetsOrder(sortedArray) {
  for(let i = 0; i < sortedArray.length ; i++) {
    checkOrderString = checkOrderString + sortedArray[i];
  }
  return checkOrderString;
}
console.log(checkAlphabetsOrder(orderString.split("").sort()));

///////////////////////    5    ///////////////////////////
let string = "the quick brown fox";
function sentenceCorrection(string) {
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== " ") {
      string = string.replace(string[i], string[i].toLowerCase());
    } else {
       i++
    }
  }
  return string;
}
console.log(sentenceCorrection(string.toUpperCase()));

///////////////////////    6    ///////////////////////////

let text = "Web Development Tutorial";
let answer;
function longestWord(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i+1].length > array[i].length) {
      answer = array[i+1];
    }
  }  
 return answer 
}

console.log(longestWord(text.split(" ")));

///////////////////////    7    ///////////////////////////

let string2 = "The quick brown fox";
let array3 = ["a","e","i","o","u"];
let answer2 = 0;
function vowelsChecker(string, array) {
  for (let i = 0; i < string.length; i++) {
   for (let j = 0; j < array.length; j++) {
     if (array[j] == string[i]) {
       answer2++
     }
    }
  }  
 return answer2 
}

console.log(vowelsChecker(string2.toLowerCase(), array3));

///////////////////////    8    ///////////////////////////

let number = 13;
let ans;
function primeNumber(number) {
  for (let i = 2; i <= 50; i++) {
    if (i !== number && number % i == 0){
      return "Number is not Prime"
    } 
  }
  return "Number is Prime"
}
console.log(primeNumber(number));

///////////////////////    9    ///////////////////////////

let value = true;
function checkType(value) {
  return typeof(value)
}
console.log(checkType(value));

///////////////////////    10    ///////////////////////////

let numberArray = [3,5,7,8,10,6,9,4,1,2];
function sendNumber(numberArray) {
  let ansArray = [];
  ansArray.push(numberArray[1]);
  ansArray.push(numberArray[numberArray.length - 2])
  return ansArray;
}
console.log(sendNumber(numberArray.sort(function(a, b){return a - b})))
