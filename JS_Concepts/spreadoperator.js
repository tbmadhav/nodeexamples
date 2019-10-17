// Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
//It is mostly used in variable array where there is more than 1 values are expected.
//It allows us the privilege to obtain a list of parameters from an array. 
//Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.


// Concatenating arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [4,5,6];

let arr = [...arr1,...arr2];
console.log(arr);


// Cloning or Copying without spread operator. It changes the cloned and also original arry
let arr3 = [4,5,6];
let arr4 = arr3;

arr4.push(7);
console.log("Original array is : "+arr3);
console.log("Array after pushing 7: "+arr4);

// Cloning or Copying using spread operator
// By using the spread operator the 
//      original array is not affected whenever the new array is altered.
let arr5 = [8, 9, 10];
let arr6 = [...arr5];
arr6.push(0);
console.log("original array5 is : "+arr5);
console.log("Array 6 is : "+arr6);


// Whenever we want to expand an array into another we do something like this:

// normally used expand method 
let arr7 = ['a','b']; 
let arr8 = [arr,'c','d']; 

console.log(arr8); // [ [ 'a', 'b' ], 'c', 'd' ] 

// Even though we get the content on one array inside the other one, 
//    but actually it is array inside another array which is definitely what we didn’t want. 
//If we want the content to be inside a single array we can make use of the spread operator.

// expand using spread operator 

let arr9 = ['a','b']; 
let arr10 = [...arr,'c','d']; 

console.log(arr10); // [ 'a', 'b', 'c', 'd' ] 
