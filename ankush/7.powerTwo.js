// NOTE power of two

let n = 32

const power = (n) => {

    let count = 0

    while (n > 0) {
        if (n % 2 == 1) count++
        n = Math.floor(n / 2)
    }

    return count === 1
}

if (power(n)) {
    console.log('Yes')
}
else {
    console.log('no')
}


// NOTE second approach
function isPowerOfTwo(n) {
    if (n == 0)
        return 0;
    while (n != 1) {
        if (n % 2 != 0)
            return 0;
        n = n / 2;
    }
    return 1;
}

console.log(isPowerOfTwo(n))