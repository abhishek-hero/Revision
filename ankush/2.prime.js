let n = 7

if (n == 1) {
    console.log('No')
    return
} else {

    let count = 0

    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }

    if (count == 1) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}