let arr = [1, 2, 5, 6, 6, 8, 9, 10]


let low = 0, high = arr.length - 1
let k = 10
let res = -1
let ans = -1

while (low <= high) {

    let mid = low + Math.floor((high - low) / 2)

    if (arr[mid] == k) {
        res = mid
        high = mid - 1
    } else if (arr[mid] < k) {
        low = mid + 1
    } else if (arr[mid] > k) {
        high = mid - 1
    }
}


low = 0, high = arr.length - 1

while (low <= high) {

    let mid = low + Math.floor((high - low) / 2)

    if (arr[mid] == k) {
        ans = mid
        low = mid + 1
    } else if (arr[mid] < k) {
        low = mid + 1
    } else if (arr[mid] > k) {
        high = mid - 1
    }
}

console.log(res, ans)