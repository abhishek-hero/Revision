// First negative number in every sliding window

let arr = [12, -1, -7, -8, -15, 30, 28, 16]
let output = [-1, -1, -7, -15, -15, 0]
let k = 3
let n = arr.length

console.log(slidingWindow(arr, k, n))

function slidingWindow(arr, k, n) {

    let i = 0, j = 0, que = [], ans = [];

    while (j < n) {

        if (arr[j] < 0) {
            que.push(arr[j])
        }

        if (j - i + 1 < k) {
            j++
        }

        else if (j - i + 1 == k) {
            if (que.length == 0) {
                ans.push(0)
            }

            else {
                ans.push(que[0])
                if (arr[i] == que[0]) {
                    que.shift()
                }
            }
            i++
            j++
        }
    }

    return ans
}