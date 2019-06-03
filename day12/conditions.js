function iterate() {
    var i;
    for (i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.getElementById('result').innerHTML += "<br> buzzfizz";
        } else if (i % 5 == 0) {
            document.getElementById('result').innerHTML += "<br>buzz";
        } else if (i % 3 == 0) {
            document.getElementById('result').innerHTML += "<br> fizz";
        } else {
            document.getElementById('result').innerHTML += "<br>" + i;
        }
    }
}