
// Without Rest parameter
function add(a,b){

    return a+b;
}

console.log(add(2,4));

// With Rest parameter

function addUsingRestParameter(...arrayinput){

    let sum = 0;
    for(let i of arrayinput){
        sum = sum + i;
    }
    return sum;
}
console.log("added 3 numbers. Result is : "+addUsingRestParameter(1,2,3));
console.log("added 5 numbers. Result is : "+addUsingRestParameter(1,2,3,4,5));
