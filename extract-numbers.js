let a = "he15011o6bye41hhh4";
let total = "";

// Extract all digits
for(let i = 0; i < a.length; i++){
    if(a[i] >= '0' && a[i] <= '9'){
        total = total + a[i];
    }
}

console.log("Extracted digits:", total); // "150116414"

// Sum all individual digits
let sum = 0;
for(let i = 0; i < total.length; i++){
    sum = sum + parseInt(total[i]);
}

console.log("Sum of individual digits:", sum); // 1+5+0+1+1+6+4+1+4 = 23

// If you want to sum consecutive digit groups: 15 + 011 + 6 + 41 + 4
let groups = total.match(/\d+/g); // Extract consecutive digit groups
console.log("Digit groups:", groups); // ['15', '011', '6', '41', '4']

let groupSum = groups.reduce((acc, num) => acc + parseInt(num), 0);
console.log("Sum of digit groups:", groupSum); // 15 + 11 + 6 + 41 + 4 = 77
