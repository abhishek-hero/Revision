function person(name, age) {
    var obj = {}
    obj.name = name
    obj.age = age

    return obj
}

var p1 = new person('abhi', 19)

// console.log(typeof (p1))

function abhishek(a) {
    // console.log(a)
    return a
}

var b = new abhishek(2)
// console.log(b)
// b()

// console.log(yah)

let num = 322

let ans = 0

while (num > 0) {
    ans = ans * 10 + num % 10
    // console.log(ans)
    num = Math.floor(num / 10)
}

console.log(ans)
// console.log(num)