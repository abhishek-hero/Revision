let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (set[a[i]] == undefined) {
        set[a[i]] = 0

        ans.push(a[i])
    }

    if (set[b[i]] == undefined) {
        set[b[i]] = 0

        ans.push(b[i])
    }
}

console.log(set)