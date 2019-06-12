var a = [5, 7, 8, 3, 4, 23, 5, 3, 10];
var i, j;


for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
            [a[j], a[j + 1]] = [a[j + 1], a[j]]
        }
    }
}
console.log(a);