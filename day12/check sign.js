function lg() {
    var a = (document.getElementById('no1').value);
    var b = (document.getElementById('no2').value);
    var c = (document.getElementById('no3').value);
    var d = a * b * c;
    if (d < 0) {
        alert("the sign is -")
    } else {
        alert("the sign is +")

    }
}