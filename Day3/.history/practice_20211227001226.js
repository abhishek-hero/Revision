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
// 2. constructor 

// function outer() {
//     let i = 0
//     function inner() {
//         for (i = 0; i < 5; i++) {
//             setTimeout(() => {
//                 console.log(i)
//             }, 500)
//         }
//     }

//     return inner
// }

// outer()()
// a()


function x() {

    for (var i = 1; i <= 5; i++) {
        // function closure(i) {
        setTimeout(function () {
            console.log(i)
        }, (1000))
        // }
        // closure(i)
    }

    console.log('hello world')
}

x()