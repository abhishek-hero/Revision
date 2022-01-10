let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < Math.max(a.length, b.length); i++) {
    set[a[i]] = 0
    set[b[i]] = 0
}

console.log(set)
console.log(ans)