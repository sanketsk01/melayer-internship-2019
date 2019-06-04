function leap() {
    var a = (document.getElementById('no1').value);
    var b = (document.getElementById('no2').value);
    var count = 0;
    for (; a <= b; a++) {
        if (a % 4 == 0) {
            count++;
        }
    }
    alert("no of leap year occurance=" + count);
}