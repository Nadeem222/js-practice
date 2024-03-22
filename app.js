// var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// var evenNumber = [];
// var oddNumber = [];

// for (var i = 0; i <numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         oddNumber.push(numbers[i])
//     }else[
//         evenNumber.push(numbers[i])
//     ]
// }

// console.log(`Even Number : ${evenNumber} Odd Number ${oddNumber}`)



// var numbers1 = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// var max = 0

// for(var i = 1; i < numbers1.length; i++){
//     if(numbers1[i] > max){
//         max = numbers1[i]
//     }
// }
// console.log(max)



// var numbers2 = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

// var min = 999999;

// for (let i = 0; i< numbers2.length; i++){
//   if(numbers2[i] < min){
//     min = numbers2[i]
//   } 
// }

// console.log(min)

// function printArray(arr) {
//     for (var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//       }   
//     }
//   }
//   var arr = [[1, 8],
//              [3, 4],
//              [5, 6]];

//   printArray(arr) 



// for (let i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     console.log(`Even Number : ${i}`)
//   }else{
//     console.log(`Odd Number : ${i}`)
//   }

// }



/// Number Guess game

// let randomNumber = Math.round(Math.random() * 10);

// let userInput = +prompt("Guess the game Number in between 1 to 10:")

// while(randomNumber !== userInput){
//   alert(`you entered the ${userInput} but right number is ${randomNumber}`)
//   userInput = +prompt("You Entered the wrong number! Guess again:")
// }

// console.log("Congratulation you guess the rigth number")



// let arr1 = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]


// for (let i = 1; i <= arr1.length; i++) {
//   for (let j = 1; j <= arr1[0].length; j++) {
//     console.log(arr1[i][j])
//   }
// }


// let cleanestCities = ["karachi", "peshawar", "multan", "islamabad", "hyderabad"];
// let userInput = prompt("Enter your city name to check is your city clean.").toLocaleLowerCase();

// for (let i = 0; i < cleanestCities.length; i++) {
//   if (userInput === cleanestCities[i]) {
//     alert(`${userInput} is clean city`)
//     break;
//   } else {
//     alert(`${userInput} is not clean city list`);
//     break;
//   }
// }

<<<<<<< HEAD
// Find factorial & sum according user input using callback function and  

// let n = prompt("Enter your number");

// let arr = [];

=======
// let n = prompt("Enter your number");

// let arr = [];

>>>>>>> cc5ae11c0c6b86ca1f0c383ae5ebf34dd2f3ad7e
// for (let i = 1; i <= n; i++){
//   arr[i - 1] = i
// }
// console.log(arr)


// let sum = arr.reduce((pre , cur )=> {
//   return pre + cur;
// })
// console.log(sum);

<<<<<<< HEAD


// let factorial = arr.reduce(( pre , cur) =>{
//   return pre * cur
// })

=======
// let factorial = arr.reduce(( pre , cur) =>{
//   return pre * cur
// })

>>>>>>> cc5ae11c0c6b86ca1f0c383ae5ebf34dd2f3ad7e
// console.log(factorial)

// // find value above 90 from the marks array 

// let marks = [96 , 85 , 32 , 54 , 97 , 99 ,65]


// let toppers = marks.filter((val) =>{
//   return val > 90
// })

// console.log(toppers)


<<<<<<< HEAD
// Solving morzilla Array problems

// Question-1

// Let's start off with some basic array practice. In this task we'd like you to create an array of three items, stored inside a variable called myArray. The items can be anything you want — how about your favorite foods or bands?

// Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.

// let myArray = ["banana" , "apple" , 'mango'];

// myArray[0] = "pizza";
// myArray[1] = "burger";

// myArray.unshift("tomato");

// console.log(myArray)

// Question # 2 Now let's move on to another task. Here you are provided with a string to work with. We'd like you to:

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem.


// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// // convert string into array using array method

// let myArray = myString.split("+");

// let arrayLength =  myArray.length;

// let lastItem = myArray.pop();

// console.log(`myArray : ${myArray} arrayLength : ${arrayLength} lastItem : ${lastItem}`)



// Question # 3For this array task, we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:

// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-".


// let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];


// myArray.pop();


// myArray.push("jhon" , "smith");


// myArray.forEach(function (item , index){
//   myArray[index] = ` ${item} ( ${index})`;
// })

// console.log(myArray);



// Question # 4 For this array task, we provide you with a starting array listing the names of some birds.

// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
// Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character.


// const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// let indexOfBirds = birds.indexOf("Eagle");

// if (indexOfBirds !== -1){
//   birds.splice(indexOfBirds , 1)
// }

// console.log(birds)

// const eBirds = birds.filter(function (val){
//   return val.startsWith("E")
// })

// console.log(eBirds)


// question# 5 In the second task, you are provided with two calculations with the results stored in the variables result and result2. You need to take the calculations, multiply them, and format the result to two decimal places.

// Try updating the live code below to recreate the finished example by following these steps:

// Multiply result and result2 and assign the result back to result (use assignment shorthand).
// Format result so that it has two decimal places and store it in a variable called finalResult.
// Check the data type of finalResult using typeof. If it's a string, convert it to a number type and store the result in a variable called finalNumber.
// To pass this test, finalNumber should have a result of 4633.33.

//Solution 

// let result = 7 + 13 / 9 + 7;
// let result2 = 100 / 2 * 6;

// let multiply = result * result2

// let finalResult = parseInt(multiply);

// typeof(finalResult);

// Number(finalResult);

// let finalNumber = finalResult


// Let's start out by testing your knowledge of basic math operators. You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, we need to write a check that proves that this value is an even number.

// Try updating the live code below to recreate the finished example by following these steps:

// Create four variables that contain numbers. Call the variables something sensible.
// Add the first two variables together and store the result in another variable.
// Subtract the fourth variable from the third and store the result in another variable.
// Multiply the results from steps 2 and 3 and store the result in a variable called finalResult.
// Check if finalResult is an even number using an arithmetic operator and store the result in a variable called evenOddResult.
// To pass this test, finalResult should have a value of 48 and evenOddResult should have a value of 0.

//Solution

// let finalResult;

// let evenOddResult;

// // Add your code here

// let num1 = 12
// let num2 = 12
// let num3 = 10
// let num4 = 8

// let sum = num1 + num2;

// let substract = num3 - num4;

// finalResult = sum * substract

// evenOddResult = finalResult % 2;


// Question# 7

// In the final task for this article, we want you to write some tests. There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.


// Statement 1: The elephant weighs less than the mouse
// const eleWeight = 1000;
// const mouseWeight = 2;

// // Statement 2: The Ostrich is taller than the duck
// const ostrichHeight = 2;
// const duckHeight = 0.3;

// // Statement 3: The two passwords match
// const pwd1 = 'stromboli';
// const pwd2 = 'stROmBoLi';

// Solution

// const weightComparison = eleWeight < mouseWeight;

// const heightComparison = ostrichHeight > duckHeight;

// const pwdMatch = pwd1.toLowerCase () === pwd2.toLowerCase()


const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName() {
if(para){
let randomIndex = Math.floor(Math.random() * names.length);

console.log(randomIndex)


let randomName = names[randomIndex]

console.log(randomName)

para.textContent = randomName;

}
}
console.log(chooseName(names)) 
=======

// let newButton = document.createElement("button");

// newButton.innerText = "Click me"

// newButton.style.color = "#fff"

// newButton.style.backgroundColor = "red"
// newButton.style.cursor ="pointer"

// document.querySelector("body").prepend(newButton);



// let para = document.querySelector(".para");

// para.classList.add("content");

// console.log(para)



// const date = new Date();



// function generateQuiz(){
//     let quiz = document.querySelector("#quiz");
    
//     let quizValue = quiz.value;

//     // let lines = quizValue.split('\n');
//     let question;

//     // console.log(lines);

//     let quizArray = [];

//     for (let i =0; i < quizValue.length; i++){
//      console.log(quizValue);

//         let num = quizValue.split("?");

//         question.push(num);

//         console.log(question)
//         break;
//     }
//     // console.log(quizValue)
    
// }

// Wtire a program to print array values
// let fruits = ["apple" , "banana" , "mango" , "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// let counting = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// let even = [];
// let odd = [];

// for(let i = 0 ; i < counting.length; i++){
//     // console.log(counting[i]);
// let evenValue = counting[i];
    
//     if(evenValue % 2 === 0){
//         even.push(evenValue);
        
//     }else{
//         odd.push(evenValue)
        
//     }
    
    
// }
// console.log(`Even Numbers: ${even}`)
// console.log(`Odd Numbers: ${odd}`)
// for(let i = counting.length -1 ; i >= 0; i--){
//     // console.log(counting[i])
// }

//  Write a program to find a value from array according user search

// let arr = ["cake" , "apple pie", "cookie" , "chips" , "patties"];

// let userInput = prompt("Enter any name");
// let flag = false;

// for (let i = 0; i < arr.length; i++){

    
//     if(userInput === arr[i]){
//         flag = true;
//         break;
//     }
// }
// if(flag){
//     console.log(`${userInput} is FOund`)
// }else{
    
//     console.log(`${userInput} is not FOund`)
// }

// write a program to find the largest number of an array

// let arr = [45 , 85 , 91 , 63 , 72 , 101 , 125 , 32 , 0];

// let largest = arr[0];
//  for(let i = 0; i < arr.length; i++){
//     if (arr[i] > largest ){
//         largest = arr[i]
//     }
//  }
// console.log(largest)

// write a program to find the smallest number of an array

// let arr = [45 , 85 , 91 , 63 , 72 , 101 , 125 , 32 , 0 , -8];

// let smallestNumber = arr[0];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < smallestNumber){
//         smallestNumber = arr[i]
//     }


// }
// console.log(smallestNumber);

// for (let i = 1; i <= 100; i++){
    
//     if (i % 5 === 0 ){
//         console.log(i)
//     }
// }

// let firstName = prompt("Enter you first Name");
// let lastName = prompt("Enter you last Name");

// // let fulName =  firstName + lastName

// let fullName = firstName.concat("" , lastName)

// console.log(fullName)

//  FInd user input length
// let userMobile = prompt('Enter you Favourite Mobile name');

// console.log(userMobile.length)

//  FInd the Index numder of any alphabet in spacific word

// let string = "to be or not to be";

// console.log(string.indexOf('be'));

// let string = "Hello World"

// console.log(string.lastIndexOf("l"))

// let string = "pakistani"

// let stringIndex = string.indexOf("i");

// console.log(string[stringIndex])

// let city = "hyderabad";

// let newCIty = city.replace("hyder" , "islam");

// console.log(newCIty)

// let index = city.indexOf("hyder");


// console.log(index)

// if (index !== -1 ){
//     let newCIty = city.slice( 0 , index) + "islam" + city.slice(index + "hyder".length);

//     console.log(newCIty)
// }

// let name = "ali and sami are best friend.They play cricket and football together"

// let stringReplace = name.replaceAll('and' , '&')

// console.log(stringReplace)

//  write a program to convert the string into number

// let num1 = "472";
// console.log(num1)

// console.log(typeof(num1));

// let num2 = Number(num1);

// console.log(num2)
// console.log(typeof(num2))

// write program to convert number 35.36 to string and show result like 3536

// let num1 = 35.36;

// let num2 = num1.toString()

// let num3  = num2.split(".")
// let result = num3.join("");


// console.log(result)

// console.log(num3)

//  write program to inform user name is correct or not if user enter any special character you should alert name not valid

// let userName = prompt("Enter your name");

// let flag = false;

// for(let i = 0; i< userName.length; i++){
//     let char = userName[i];
//     if(char === "@" || char === "!" || char === "," || char === "."){
//         flag =true;
//         break;
//     }


// }

// if(userName !== " " && !flag){
//     alert("Congrats")
// }else{
//     alert("Invalid user name")
// }

//  write a program to take user input and tell him if his search product available or not and also tell his search product avaible at this index number

// let userInput = prompt("Enter any name").toLowerCase();

// let arr = ["cake" , "apple pie", "cookie" , "chips" , "patties"];
// let flag = false;

// let index = -1
// let i = 0;

// while (i < arr.length && !flag) {
//     if (userInput === arr[i]) {
//         index = i;
//         flag = true;
//     }
//     i++;
// }


// // for (let i = 0; i < arr.length; i++){
// //     if(userInput === arr[i]){
// //         index = i
// //         flag = true;
// //         break
// //     }
// // }
// if (flag) {
//     alert(`Your searched product '${userInput}' is available at index ${index}`);
// } else {
//     alert(`Sorry, your searched product '${userInput}' is not found in the list`);
// }

// let string =  "university of karachi";

// let arr = string.split(" ");

// console.log(arr)

// for( let i = 0; i < arr.length; i++){
//     for(let j =0; j <arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }


//  write a program to find user input last character
// let userInput = prompt("enter any word");

// let lastAlphabet = userInput.charAt(userInput.length -1);

// console.log(lastAlphabet)
>>>>>>> cc5ae11c0c6b86ca1f0c383ae5ebf34dd2f3ad7e
