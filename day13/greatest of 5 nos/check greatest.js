function lg() {
    var a = [(document.getElementById('no1').value),
        (document.getElementById('no2').value),
        (document.getElementById('no3').value),
        (document.getElementById('no4').value),
        (document.getElementById('no5').value)
    ];
    var b = 0;
    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] > b) {
            b = a[i];
        }
    }
    alert("greatest no is=" + b);
}