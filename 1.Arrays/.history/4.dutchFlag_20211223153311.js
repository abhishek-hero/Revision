let arr = [0, 1, 2, 0, 1, 2]
let n = arr.length
let count0 = 0, count1 = 0, count2 = 0;

for (let i = 0; i < n; i++) {

    if (arr[i] == 0) {
        count0++
    } else if (arr[i] = 1) {
        count1++
    } else if (arr[i] == 2) {
        count2++
    }
}

for (let i = 0; i < count0; i++) {
    arr[i] = 0
}

for (let i = count0; i < (count0 + count1); i++) {
    arr[i] = 1
}

for (let i = (count1 + count0); i < (count1 + count2); i++) {
    arr[i] = 2
}

console.log(arr)