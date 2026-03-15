// onclick="console.log('Button was Clicked');alert('Hello!')"

// let btn = document.querySelector("#btn1");
// btn.onclick = () => {
//     console.log('Button was Clicked');
//     alert('Hello!');
// }


// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//    console.log('this a Box');
// } 

// event Listeners

let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("Button was Clicked!");
//         console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// });

// btn1.addEventListener("click", () => {
//     console.log("Button was Clicked! so this eventlistener is used multi-time");
// });



// btn1.addEventListener("click", () => {
//     console.log("Button was Clicked! 1-time");
// });

// btn1.addEventListener("click", () => {
//     console.log("Button was Clicked! 2-time");
// });

// const handler3 = () => {
//     console.log("Button was Clicked! 3-time");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("Button was Clicked! 4-time");
// });

// btn1.removeEventListener("click", handler3);


// let modeColor = document.querySelector("#mode");

// let currMode = "light";
// modeColor.addEventListener("click", () => {
//     if(currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "Black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "White";

//     }

//     console.log(currMode)
// })


let modeColor = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeColor.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }

    console.log(currMode)
})