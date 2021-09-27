"use strict";

const myArr = [101,201,301,401,501]; 
const arrTwo = myArr.splice(0,5).slice(0,2); 
arrTwo[0] = "001"; 

console.log(arrTwo);

// output ['001', 201]

// 1. with splice mutate the array and  select all element of array  between position 1 to 5 

// then with slice selected only 1st and 2nd position element

// add '001' to the first position with type string;