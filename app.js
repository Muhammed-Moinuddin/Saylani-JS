// //alert("How are you?");
// var name = "Moinuddin";
// var firstName = "Muhammad";
// //alert(firstName + " " + name);
// var one = 1;
// var two = 2;
// //alert(one + two);
// var num1 = 30;
// var num2 = 40;
// var num3 = 10;
// var num4 = 20;
// var num5 = 

// alert(num1 + num2 - one - two) // 70-3 = 67
// alert(num1 * num3 + num2 / num4 - one - two) // 299
// alert(num1 / num3 % num2); // (30 / 10 % 40) --> 3
// alert(num1 / num2 % num3); // (30 / 40 % 10) --> 0.75
// //while-loop
// var i = 0;
// while (i <= 3) {
//     alert(i);
//     i++
// }
// //do-while-loop
// var j = 0;
// do {
//     alert(j);
//     j++;
// } while(j <= 5);
// JavaScript:void(0) means it is undefined
function popup(message){
    alert(message);
}
function checkAddress(fieldId){
    if (document.getElementById(fieldId).value === ""){
        alert("Email address required.")
    }
}
function fillCity() {
     var cityName;
     var zipEntered = document.getElementById("zip").value;
     switch (zipEntered) {
     case "60608" :
     cityName = "Chicago";
     break;
     case "68114" :
     cityName = "Omaha";
     break;
     case "53212" :
     cityName = "Milwaukee";
     }
     document.getElementById("city").value = cityName;
}
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
     document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
//hoisting
x = 5;
var x;
console.log(x);
//Dou farq hain 1:Scope 2:Hoisting
// let mai NO HOISTING, So below code will not work
// y = 7;
// let y;
// console.log(y);
function work1() {
    console.log("I'm Working 1");
}
const work2 = () => {
    console.log("I'm Working 2");
}
work1();
work2();
const work3 = (a, b) => a + b;

console.log(work3(3,3));

const evens = [2,4,6,8,10];
const odd = evens.map(val => val - 1);
console.log(odd);
// filter
const evens2 = [12,14,17,16,19,18];
let pure_evens = evens2.filter( val => val % 2 == 0);
console.log(pure_evens);

pure_evens.forEach( val => console.log(val));

function f(x, y = 7, z = 42) {
    return x + y + z;
}
console.log(f(1) === 50);

//Rest Parameters
function addSomething(x, y, ...a){
    let answer = 0;
    a.forEach(val => answer += val);
    return x + y + answer;
}
console.log(addSomething(1, 2, 7, 10, 50));

//Spread Operators (important) (in array & in objects)
var someParams = ["hello", true, 3.5];
var otherParams = [1, 2, ...someParams];
console.log(otherParams);

//Before
const d = 5;
console.log("This is my number " + d)
//String Interpolation
console.log(`This is my number ${d}`);
//Turnary operator
console.log(`This is answer ${d === 5 ? true : false}`);
//New way of Object Key
let g = 0, h = 0;
const anyObj = {g, h};
console.log(anyObj);
//Dynamic Key
let newObj = {
    foo: "bar",
    ["baz" + addSomething()] : 42,
    square(num){
        return num ** 2;
    }
}
//In Ecmascript6
var objKey = "foo";
console.log(newObj[objKey]);

//Destructuring Assignment
var anyList = [1, 2, 3];
var [k, ,l] = anyList;
console.log(k,l);







