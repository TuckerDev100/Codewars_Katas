// if multiple of 3, print Fizz
// if multiple of 5, print Buzz
// if both, print FizzBuzz

function fizzBuzz (num) {
    for (let i = 0; i <= num; i++) {
        
        if (i % 15 == 0) {
            console.log("FizzBuzz")
            console.log (i)
           

        }
        else if (i % 5 == 0) {
            console.log("Buzz")
            console.log (i)

        }
        else if (i % 3 == 0) {
            console.log("Fizz")
            console.log(i)

        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz(100)