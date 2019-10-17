
// Without spread operator
function add(a,b){

    return a+b;
}

console.log(add(2,4));

// With spread operator

function addUsingSpread(...arrayinput){

    let sum = 0;
    for(let i of arrayinput){
        sum = sum + i;
    }
    return sum;
}
console.log("added 3 numbers. Result is : "+addUsingSpread(1,2,3));
console.log("added 5 numbers. Result is : "+addUsingSpread(1,2,3,4,5));
