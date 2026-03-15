//           string is immutable                                                              for loop

// for (let count = 1; count <= 5; count++) {
//     console.log("print 5 times");
// }

// Calculate sum of 1 to n
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("Sum from 1 to 5 is:", sum); // Output: 15

// for (let i = 1; i <= 5; i++) {
//     console.log("i =", i);
// }

//                                                                     infinite loop
// for (let i = 1; ; i++) {
//     console.log("i =", i);
// }

//                                                                      while loop

// let i = 1;
// while (i <= 5) {
//     console.log("i =", i);
//     i++;
// }

//                                                                    do while loop


// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// } while (i <= 10);


//                                                                       for-of loop

//  let str = "helloworld";
//  let size = 0;
//   for (let val of str){
//     console.log(val);
//     size++;
//   }

// console.log("Size of str", size);

//                                                                     for-in loop      


// let student = {
//   name : "aakash",
//   age : 21,
//   city : "pune",

// }

// for (let key in student ) {
//   console.log("key is",key ,"and value is", student[key]);
// }


//                                                            Print even numbers from 0 to 100
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("num =", num);
//   }

// }


//                                                            Print odd numbers from 0 to 100
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     console.log("num =", num);
//   }

// }


//                                                            Guess the number game
// let gamNum = 7;
// let userNum = prompt("Guess the number between 1 to 10");
// while (userNum != gamNum) {
//    userNum = prompt("Wrong guess! Please try again:");
// }
//   console.log("you gressed it right ");



//                                                            String basics
// let str = "helloworld";
// console.log(str);
// console.log(str.length);
// console.log(str[5]);


//                                                            String traversal

// let obj = {
//   name: "aakash",
//   age: 21,
//   city: "pune",
// };

// let output = (`the name of the boy is ${obj.name} and age is ${obj.age}`);
// console.log("output =", output);

//                                                            Escape sequences in strings
// let str = "hello\tworld";
// console.log(str.length);

// console.log("out \n put");
// console.log("out \t put");


// let str = "  helloworld   ";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(2, 6));
// console.log(str.replace("world", "universe"));
// console.log(str.charAt(4));

// strr = "hello world hello";
// console.log(strr.replaceAll("lo", "p"));


// let str1 ="hi ";
// let str2 = "sir";

// console.log(str1.concat(str2));
// console.log(str1 + str2);
// console.log("i am learning " + str1 + str2);

let userNmae = prompt("Enter your name:");
console.log("@"+userNmae+userNmae.length);