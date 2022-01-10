let a = [85, 25, 1, 32, 54, 6]
let b = [85, 2]


let set = {}
let ans = []

for (let i = 0; i < a.length; i++) {
    set[a[i]] = 0

}

for (let j = 0; j < b.length; j++) {

    set[b[j]] = 0
}

console.log(Object.keys(set).length)