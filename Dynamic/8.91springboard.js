const knapsack = (arr, n, ans, row, col) => {

    let res = arr[0][0]
    for(j = 0; j < row; j++){
        let temp = []

        for(let k = 0; k < col; k++){
            if(k == 0){
                
            }
        }
    }

}




function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim()
    let line = 2
    
    for(let i = 0; i < test; i++){

        let splitter = input[1].trim().split(" ").map(Number)
        let row = splitter[0]
        let col = splitter[1]

        let arr = []
        for(let j = 0; j < row; j++){
            let temp = input[line++].trim().split(" ").map(Number)
        arr.push(temp)
        }
    }
}

if (process.env.USERNAME === "abhim") {
runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}