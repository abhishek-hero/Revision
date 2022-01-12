// Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz” instead of the number,
//  for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"

let n = 10

for (let i = 1; i <= n; i++) {

    if (i % 3 == 0) {
        console.log('fizz')
    } else if (i % 5 == 0) {
        console.log("buzz")
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzBuzz')
    } else {
        console.log(i)
    }
}