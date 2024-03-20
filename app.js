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

// let n = prompt("Enter your number");

// let arr = [];

// for (let i = 1; i <= n; i++){
//   arr[i - 1] = i
// }
// console.log(arr)


// let sum = arr.reduce((pre , cur )=> {
//   return pre + cur;
// })
// console.log(sum);

// let factorial = arr.reduce(( pre , cur) =>{
//   return pre * cur
// })

// console.log(factorial)

// // find value above 90 from the marks array 

// let marks = [96 , 85 , 32 , 54 , 97 , 99 ,65]


// let toppers = marks.filter((val) =>{
//   return val > 90
// })

// console.log(toppers)



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