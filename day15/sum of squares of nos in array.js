function sum_sq(array) {
    var sum = 0,
        i = 0;
    while (i < array.length) {
        sum += Math.pow(array[i], 2);
        i++;
    }
    return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));