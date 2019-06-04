var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i, random1;


for (i = 0; i < a.length; i++) {
    random1 = Math.floor(Math.random() * a.length);
    [a[i], a[random1]] = [a[random1], a[i]];
}
console.log(a);