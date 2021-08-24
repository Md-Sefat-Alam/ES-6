function multiply(a, b) {
    console.log(typeof b)
    b = (typeof b !== 'undefined') ? b : 1
    return a * b;
}
console.log(multiply(5, 2))
console.log(multiply(5));

function callSomething(thing = callSomething()) {
    return thing;
}
let numberOfTimesCalled = 0;
function callSomething() {
    numberOfTimesCalled += 1;
    return numberOfTimesCalled;
}
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());