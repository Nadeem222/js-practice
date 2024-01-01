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

let n = prompt("Enter your number");

let arr = [];

for (let i = 1; i <= n; i++){
  arr[i - 1] = i
}
console.log(arr)


let sum = arr.reduce((pre , cur )=> {
  return pre + cur;
})
console.log(sum);

let factorial = arr.reduce(( pre , cur) =>{
  return pre * cur
})

console.log(factorial)

// find value above 90 from the marks array 

let marks = [96 , 85 , 32 , 54 , 97 , 99 ,65]


let toppers = marks.filter((val) =>{
  return val > 90
})

console.log(toppers)