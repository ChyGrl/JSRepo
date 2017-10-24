/*FizzBuzz Without Loops
Demonstration of how to avoid for loops and mutable variables and construct a solution to fizz buzz in a functional style.*/


Array.from(new Array(30), (value, index) => {
    index++

    if (index % 5 === 0 || index % 3 === 0) {
        if (index % 5 !== 0) return 'Fizz'
        if (index % 3 !== 0) return 'Buzz'
        return 'FizzBuzz'
    }

    return index
})
.map(value => console.log(value))