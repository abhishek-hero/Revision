let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (set[arr[i]] == undefined) {
        set[arr[i]] = 0

        ans.push(arr[i])
    }
}

console.log(set)