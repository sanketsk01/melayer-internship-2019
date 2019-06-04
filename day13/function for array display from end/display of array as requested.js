function iterate(n) {
    var i = [5, 7, 8, 9, 1, 2, 3, 4, 6, 10];
    var j = 0;
    var last = i.length - 1;
    console.log("display n no of elements from end" + n)
    for (j = 0; j < n; j++) {
        console.log(i[last]);
        last--;
    }
}
iterate(4);