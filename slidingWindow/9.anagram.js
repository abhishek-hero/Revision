// Given two strings find occurances of
// anagrams of second string in  first string

let str = 'aabaabaa'
let check = 'aaba'
let n = str.length
let k = check.length

console.log(str)

let set = {}

for (let i = 0; i < check.length; i++) {

    if (set[check[i]] == undefined) {
        set[check[i]] = 1
    } else {
        set[check[i]]++
    }
}

console.log(set)
let count = Object.keys(set).length

let i = 0, j = 0;
let ans = 0

while (j < n) {

    if (set[str[j]] !== undefined) {
        set[str[j]]--
    }
    console.log(set)

    if (set[str[j]] == 0) {
        count--
    }

    if (j - i + 1 < k) {
        j++
    }

    else if (j - i + 1 == k) {
        if (count == 0) {
            ans++
        }

        if (set[str[i]] !== undefined) {
            console.log('not undefined')
            set[str[i]]++
            count++
            // console.log()
        }

        i++
        j++

    }
}

console.log(ans)