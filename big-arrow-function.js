const largest = (a, b = 0, c = 0) => {
    if (a > b && a > c) {
        return `largest is: ${a}`;
    }
    else if (b > a && b > c) {
        return `largest is: ${b}`;
    }
    else {
        return `largest is: ${c}`;
    }
}
console.log(largest(5, 5, 10))
console.log(largest(55, 50, 10))
console.log(largest(5))