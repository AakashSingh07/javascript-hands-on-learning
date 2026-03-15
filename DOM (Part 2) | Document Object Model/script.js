// DOM Manpulation

                                                                //Attribute

// let element = document.querySelector("div");
// console.log(element);

// let boxer = element.getAttribute("id");
// console.log(boxer);

// let box = element.getAttribute("name");
// console.log(box);


// let element = document.querySelector("p");
// console.log(element.getAttribute("class"));
// console.log(element.setAttribute("class" , "newClass"));

                                                                // style 

// let div = document.querySelector("div");
// console.log(div.style)

// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";

                                                        //insert Element 
    
//  let newBtn = document.createElement("button");
//  newBtn.innerText = "click me";
//  console.log(newBtn); 
 
//  let div = document.querySelector("p");
//  div.after(newBtn);

//  let heading = document.createElement("h1");
//  heading.innerHTML= "<i>Hi, I am new </i>";
//  console.log(heading)

//  document.querySelector("body").prepend(heading);

// let para = document.querySelector("p");
// para.remove();


let newButton = document.createElement("Button");
newButton.innerText = "click me";

newButton.style.color = "while";
newButton.style.backgroundColor = "yellow"

document.querySelector("body").prepend(newButton);

//Q2A

let para = document.querySelector("p");
