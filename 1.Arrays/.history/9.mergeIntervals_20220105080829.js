intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1,6],[8,10],[15,18]]
let ans = []

for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {

        if (intervals[i][1] >= intervals[j][0]) {
            ans.push([intervals[i][0], intervals[j][1]])
            break
        }

        ans.push(intervals[i])
        ans.push(intervals[j])
        break
    }
}

console.log(ans)