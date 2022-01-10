// Longest substring with k unique characters

let str = 'aabacbebebe'
let n = str.length
let k = 3
let i = 0, j = 0, set = {};
let max = 0.00001

while (j < n) {

    if (set[str[j]] == undefined) {
        set[str[j]] = 1
    } else {
        set[str[j]]++
    }

    if (Object.keys(set).length < k) {
        j++

    } else if (Object.keys(set).length == k) {
        max = Math.max(max, j - i + 1)
        j++

    } else if (Object.keys(set).length > k) {

        while (Object.keys(set).length > k) {
            set[str[i]]--

            if (set[str[i]] == 0) {
                delete (set[str[i]])
            }
            i++
        }
        j++
    }
}

console.log(max)