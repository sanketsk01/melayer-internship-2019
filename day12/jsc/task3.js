function logic(){
    

    
   var enter1 = document.getElementById('enter1').value;
   var enter2 = document.getElementById('enter2').value;
   var enter3 = document.getElementById('enter3').value;

var s = (enter1 + enter2 + enter3)/2;

var area =  Math.sqrt(s*((s-enter1)*(s-enter2)*(s-enter3)));

document.getElementById("answer").value= area;

}