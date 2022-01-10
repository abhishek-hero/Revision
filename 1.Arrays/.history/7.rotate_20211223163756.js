let arr = [1, 2, 3, 4, 5]
let n = arr.length

// let a = arr.pop()
// arr.unshift(a)

// console.log(arr)


let temp = arr[n - 1]

for (let i = n - 1; i >= 0; i--) {
    arr[i] = arr[i - 1]
}

arr[0] = temp
console.log(arr)


// let temp = []

// for(let i = 0; i < n; i++){

//     if(i < 1){

//     }
// }