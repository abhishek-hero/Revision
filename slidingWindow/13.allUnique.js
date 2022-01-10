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

    // NOTE if map size == window size the that's one of the potential answer
    if (Object.keys(set).length == (j - i + 1)) {
        max = Math.max(max, j - i + 1)
        // console.log(max)
        j++

        // NOTE If map size if less than window size that means it included repeated characters
    } else if (Object.keys(set).length < j - i + 1) {
        while (Object.keys(set).length < j - i + 1) {
            set[str[i]]--

            // NOTE If character count is 0 then delete that character from map.
            if (set[str[i]] == 0) {
                delete (set[str[i]])
            }
            i++
        }
        j++
    }
}

console.log(max)