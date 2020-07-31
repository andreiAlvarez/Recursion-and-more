function checkEqual(a, b) {
return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


function checkSign(num) {
return (num > 0)? "positive"
: (num < 0) ? "negative"
: "zero";
}

checkSign(10);

// Only change code below this line
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)]
}
// Only change code above this line
