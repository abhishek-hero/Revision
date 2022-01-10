let a = [85, 25, 1, 32, 54, 6]
let b = [85, 2]


let set = {}
let ans = []

for (let i = 0; i < a.length; i++) {
    if (set[a[i]] == undefined) {
        set[a[i]] = 0
        ans.push(a[i])
    }

}

for (let j = 0; j < b.length; j++) {

    if (set[b[j]] == undefined) {
        set[b[j]] = 0

        ans.push(b[j])
    }
}


console.log(ans.length)