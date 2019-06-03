function avg() {
    var a = [Number(document.getElementById('no1').value),
        Number(document.getElementById('no2').value),
        Number(document.getElementById('no3').value),
        Number(document.getElementById('no4').value),
        Number(document.getElementById('no5').value)
    ];
    var b = 0;
    var i;
    for (i = 0; i < a.length; i++) {
        b = b + a[i];
    }
    b = b / 5;
    if (b < 60) {
        document.getElementById('result').innerHTML = "average is=" + b + "grade is=f";
    } else if (b < 70) {
        document.getElementById('result').innerHTML = "average is=" + b + "grade is=d";

    } else if (b < 80) {
        document.getElementById('result').innerHTML = "average is=" + b + "grade is=c";

    } else if (b < 90) {
        document.getElementById('result').innerHTML = "average is=" + b + "grade is=b";

    } else if (b <= 100) {
        document.getElementById('result').innerHTML = "average is=" + b + "grade is=a";

    } else {
        document.getElementById('result').innerHTML = "entered wrong nos";

    }
}