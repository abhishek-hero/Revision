intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1,6],[8,10],[15,18]]
let ans = []

while (i < intervals.length) {
    for (let j = i + 1; j < intervals.length; j++) {

        if (intervals[i][1] >= intervals[j][0]) {
            ans.push([intervals[i][0], intervals[j][1]])
            i += 2
            break
        }

        ans.push(intervals[i])
        i++
        break
    }
}

console.log(ans)