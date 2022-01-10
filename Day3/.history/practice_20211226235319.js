var a = {
    name: 'shashank'
}
var b = a

b.name = 'abhishek'
console.log(a.name)


function abhishek() {

    console.log("something")
}

{
    var x = 10
}

// console.log(x)

function Abhishek(a, b) {
    this.age = a
    this.name = b
}

let c = new Abhishek(20, 'a')
// 1. hoisting