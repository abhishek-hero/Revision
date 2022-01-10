// var a = {
//     name: 'shashank'
// }
// var b = a

// b.name = 'abhishek'
// // console.log(a.name)


// function abhishek() {

//     console.log("something")
// }

// {
//     var x = 10
// }

// // console.log(x)

// class pankaj {
//     constructor(a, b) {
//         this.age = a
//         this.name = b
//     }

// }

// let c = new pankaj(20, 'a')
// console.log(c)
// // 1. hoisting


// 1. hoisting
// 2. constrocture 

function outer() {
    let a = 10
    function inner() {
        console.log(a)
    }

    return inner
}

let a = outer()()
// a()