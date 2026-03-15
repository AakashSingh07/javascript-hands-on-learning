//  function sum(a, b) {
//     console.log(a + b);
//  }

//  function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
//  }

//     calculator(1, 2, (a, b) => {
//         console.log(a + b);
//     });

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);

// console.log("one");
// console.log("two");

// setTimeout((hello) => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// function getData(dataId) {
//     //2s
// setTimeout(() => {
//      console.log("data :", dataId);
// }, 2000);

// }

// function getData(dataId, getNextData) {                                 //callback hell
//   //2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });

//                                                     Promises

// let promise = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   //    resolve("Promise is resolved");
//   reject("Promise is rejected");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("failure");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });
// promise.catch((err) => {
//   console.log("rejected", err);
// });

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 2000);
//   });
// }

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {
//   });
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// //Promise chaining

// getData(1)
// .then((res) => {
//   return getData(2);
// }).then((res) => {
//    return getData(3);
// }).then((res) => {
//    console.log("Success");
// });

// async function hello() {
//    console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //1st
//   await api(); //2nd
//   await api();
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// //Async-await
// async function getAllData() {
//   console.log("getting data1....");
//   await getData(1);
//   console.log("getting data2....");
//   await getData(2);
//   console.log("getting data3....");
//   await getData(3);
//   console.log("getting data4....");
//   await getData(4);
//   console.log("getting data5....");
//   await getData(5);
//     console.log("successfully got all data");

// }




// 1️⃣ Callback Hell ❌ (old way)
// 2️⃣ Promise Chain ✅
// 3️⃣ Async / Await ⭐ (best and most used)

// example 


// //                                                    callback hell

// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });



// //     callback hell

// getData(1, () => {
//   console.log("getting data2 ....");
//   getData(2, () => {
//     console.log("getting data3 ....");
//     getData(3, () => {
//       console.log("getting data4 ....");
//       getData(4);
//     });
//   });
// });


// //                                                     Async-await

// async function getAllData() {

//   console.log("getting data1....");
//   await getData(1);

//   console.log("getting data2....");
//   await getData(2);

//   console.log("getting data3....");
//   await getData(3);

//   console.log("getting data4....");
//   await getData(4);

//   console.log("getting data5....");
//   await getData(5);

// }


//                                    IIFE (Immediately Invoked Function Expression)
//                                    used to call the async function immediately

// (async function () {

//   console.log("getting data1....");
//   await getData(1);

//   console.log("getting data2....");
//   await getData(2);

//   console.log("getting data3....");
//   await getData(3);

//   console.log("getting data4....");
//   await getData(4);

//   console.log("getting data5....");
//   await getData(5);

// })();