let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < Math.max(a.length, b.length); i++) {
    ans.push(a[i])
    set[b[i]] = 0
}

console.log(set)
console.log(ans)