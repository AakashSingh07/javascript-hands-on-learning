//                                                           Example of a simple function in JavaScript

// function myFunction() {
//     console.log("Hello, World!");
//     console.log("This is my function.");
// }

// myFunction();


//                                                           Example of a function with parameters and return value

// function myyFunction(msg){
//     //parameter -> input
//     console.log(msg);
// }

// myyFunction("Hello, World!");  // argument 


//                                                           Example of a function that adds two numbers
// function sum(x , y){
//     console.log(x + y);
// }

// sum(5, 9);

//                                                           Example of a function that returns the sum of two numbers

// function sum(x , y){
//     s = x + y;
//     console.log("Inside the function: ");
//     return s;
// }

// let val = sum(3 , 777);
// console.log(val);

// sum function 
// function sum(a , b){
//     return a + b;
// }

// const arrowSum = (a , b) => {
//     console.log(a + b);
// };

// // multiply function
// function multiply(a , b){
//     return a * b;
// }

// const arrowMult = (a , b) => {
//     return a * b;
// };

// let helloPrint = () => {
//     console.log("Hello");
// }


//                                                        Example of a function that counts vowels in a string
// function countvowels(str){
//     let count = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
//             count++;
//         }

//     }
//     console.log(count);
// }


//.                                                        Example of High Order Functions and Methods 
// high order function/methods.    hof/hom

// let arr = ["Mumbai" , "Delhi" , "Chennai" , "Kolkata"];
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx ,arr)
// });
 
// let nums =[ 1, 2, 3, 4, 5, 6];
// nums.forEach(nums => {
//     console.log(nums * nums);
// }) 


//                                                                              Example of map method

// let nums =[ 1, 2, 3, 4, 5, 6];

// let newnums = nums.map((nums) => {
//     return nums * nums;
// })

// console.log(newnums);


//                                                                             Example of filter method
// even
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evennums = arr.filter((num) => {
//     return num % 2 === 0;
// }); 
// console.log(evennums);

// odd 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evennums = arr.filter((num) => {
//     return num % 2 !== 0;
// }); 
// console.log(evennums);



//                                                                             Example of reduce method
// let arr = [1, 2, 98, 4, 5, 44 ,76, 88, 90];

// let evennums = arr.reduce((prev , cul) => {
//     return prev + cul;
// }); 
// console.log(evennums);


// max value
// let arr = [1, 2, 98, 4, 5, 44 ,76, 88, 90];

// let evennums = arr.reduce((prev , cul) => {
//     return prev > cul ? prev : cul;
// }); 
// console.log(evennums);


// let arr = [81, 72, 98, 94, 85, 44 ,76, 88, 90];
// let marks= arr.filter((val) => {
//     return val > 90;
// })

// console.log(marks);


let n = prompt("Enter your name: ");
let arr =[];

for (let i = 1; i <= n; i++) {
    arr[i-1] = i;
    
}

console.log(arr);

let sum = arr.reduce((prev , cul) => {
  return prev + cul;
});

console.log( "sum of" , sum);

let factorial = arr.reduce((prev , cul) => {
  return prev * cul;
});

console.log("Factorial is: ", factorial);
