'use strict'

const fibonacci = () => {
    let arr = [0, 1];
    for (let i = 1; arr[i] <= 350; i++) {arr.push(arr[i] + arr[i - 1])}
    return arr;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}