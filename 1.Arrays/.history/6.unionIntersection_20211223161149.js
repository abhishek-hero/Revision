let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]


let set = {}
let ans = []

for (let i = 0; i < a.length; i++) {
    set[a[i]] = 0

    ans.push(a[i])
}

for (let j = 0; j < b.length; j++) {

    if (set[b[j]] == undefined) {
        set[b[j]] = 0

        ans.push(b[i])
    }
}


console.log(ans)