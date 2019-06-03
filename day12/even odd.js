function iterate() {
    var i;
    for (i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            document.getElementById('result').innerHTML += "<br> the no is even=" + i;
        } else {
            document.getElementById('result').innerHTML += "<br> the no is odd=" + i;
        }
    }
}