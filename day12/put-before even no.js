function put() {
    var t = Number(document.getElementById('no1').value);
    var r = 0;
    var o = 0;
    while (t > 0) {
        o = t % 10;
        r = r * 10 + o;
        t = Math.floor(t / 10);
    }
    document.getElementById('result').innerHTML += r;
}