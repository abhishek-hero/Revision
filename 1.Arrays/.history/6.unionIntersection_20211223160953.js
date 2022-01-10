let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < a.length; i++) {

    console.log(a[i], b[i])
    set[a[i]] = 0
    set[b[i]] = 0
}

// console.log(set)
// console.log(ans)