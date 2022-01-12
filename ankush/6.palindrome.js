// NOTE 1. reverse the string and check if both string are equal
// NOTE 2. Use two pointers

let str = 'malayala'
let n = str.length

const palindrome = (str, n) => {
    let i = 0; j = n - 1

    while (i <= j) {

        if (str[i] == str[j]) {
            i++
            j--
        } else {
            return 'No'
        }
    }
    return 'Yes'
}

console.log(palindrome(str, n))