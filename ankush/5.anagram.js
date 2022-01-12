let str = 'aman'
let str2 = 'manam'


// 1. NOTE Approach

// str = str.split('').sort().join('')
// str2 = str2.split('').sort().join('')

// if (str == str2) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// 2. NOTE

let set = {}

for (let i = 0; i < str.length; i++) {
    if (set[str[i]] == undefined) {
        set[str[i]] = 1
    } else {
        set[str[i]]++
    }
}

for (let i = 0; i < str2.length; i++) {
    if (set[str2[i]] !== undefined) {
        set[str2[i]]--

        if (set[str2[i]] == 0) {
            delete (set[str2[i]])
        }
    } else {
        console.log('No')
        return
    }
}

if (Object.keys(set).length == 0) {
    console.log('yes')
}