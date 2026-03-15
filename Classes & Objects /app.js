// const student = {
//     fullName :"AAkash",
//     age : 32,
//     marks: 87,
//     allMarks : function() {
//         console.log(this.marks);
//     },
// };


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun = {
//     salary: 50000,  
// };

// const karanArjun2 = {
//     salary: 50000,  
// };

// const karanArjun3 = {
//     salary: 50000,  
// };

// const karanArjun4 = {
//     salary: 50000,  
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


// class ToyotaCar {
//     start() {
//         console.log("start");
//     }
//     Stop() {
//         console.log("stop");
//     }
//     setbrand(brand) {
     
//        this.brand = brand;
//                 }
//             }
    
// let fortuner = new ToyotaCar();
// fortuner.setbrand("Fortuner");
// let lexus = new ToyotaCar();
// fortuner.setbrand("Lexus");

class ToyotaCar {

    constructor(brand, mileage) {
        console.log("Creating a New Object");
         this.brand = brand;
         this.mileage = mileage;
    }

    start() {
        console.log("start");
    }
    Stop() {
        console.log("stop");
    }
    
}
    
let fortuner = new ToyotaCar("fortuner", 10);
let lexus = new ToyotaCar("lexus", 12);
