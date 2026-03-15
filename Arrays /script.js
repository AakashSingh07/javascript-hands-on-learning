//                                Arrays is mutable 
//                                 Arrays in JavaScript

// let marks = [67,87,79,97,89];
// console.log("Marks:", marks);
// marks[2] = 95;


// let hero = ["Ironman", "Spiderman", "Thor", "Hulk"];
// console.log("Heroes:", hero);
// console.log(hero[1]);
// console.log(hero[0]);


//                                  for loop to iterate through an array
// for(let i = 0; i < hero.length; i++) {
//     console.log(hero[i]);
// }


//                                  for of loop to iterate through an array
// for (let hr of hero) {
//     console.log(hr);
// }

// let citys = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// for (ci of citys){
// console.log(ci);
// console.log(ci.toUpperCase());
// }

// let student = [78, 85, 90, 95, 88];
// sum = 0;
// for (let val of student) {
//     sum += val;                          // sum = sum + val;
   
// }
// let avg = sum / student.length;

// con. sole.log(`Average marks: = ${avg}`);


// let items = [250 , 400, 150, 300, 500];
// let i = 0;
// for (it of items) {
//     // console.log(`value of index ${i} = ${it}`);
//     offer = it / 10;
//     items[i] = items[i] - offer;
//     console.log(`Price after discount is ${items[i]}`);
//     i++;

// }

// for (i = 0; i < items.length; i++) {
//     offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(`Price after discount is ${items[i]}`);
// }
// console.log("Final prices after discount:", items);


//                                                                       Array Methods
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// fruits.push("Grapes", "Mango");  // adds at the end
// console.log("fruits after push: ", fruits);

// let deletedFruits = fruits.pop();  // removes from the end
// console.log("fruits after pop: ", fruits);
// console.log("deletedFruits after pop: ", deletedFruits);

// console.log(`${fruits.toString()}`)
// console.log(fruits.toString());

//                                                                        concat() method
// let marvalHeroes = ["Ironman", "Spiderman", "Thor", "Hulk"];
// let dcHeroes = ["Batman", "Superman", "Flash", "Aquaman"];
// let indianHeroes = ["Shaktiman", "Nagraj", "Krish", "Super Commando Dhruv"];

// let heroes = marvalHeroes.concat(dcHeroes, indianHeroes); 
// console.log("All Heroes:", heroes);


//                                                                        slice() method
// let marvalHeroes = ["Ironman", "Spiderman", "Thor", "Hulk"];
// console.log("Marval Heroes:", marvalHeroes);
// console.log(marvalHeroes.slice(1, 3)); 

//                                                                        splice() method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// //                          remove 5 elements from index 2 and add 7, 2001 , 84 at index 2
// arr.splice(2, 5, 7, 2001 , 84);
// //                                                                  add 2004 at index 7
// arr.splice(7, 0, 2004);
// //                                                                  remove 1 element at index 5
// arr.splice(5, 1);


// let array = ["Bloomberg", "Microsoft", "Google", "Uber", "IBM", "Netflix"];
// array.shift();
// array.splice(2,1, "Ola");
// array.push("Amazon");
// console.log(array);