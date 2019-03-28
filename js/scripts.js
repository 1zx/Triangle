function triangleTracker(){
  var a = document.getElementById('num1').value;
  var b = document.getElementById('num2').value;
  var c = document.getElementById('num3').value;

    if ((a==0 && b==0 && c==0)&&(a+b<c || b+c<a || a+c<b && a+c<b || b+c<a ||a+b<c)){
      alert("not a triangle");
    }
    else if (a ===b && b === c && c === a) {
        alert("Equilateral Triangle");
    }
      else if (a === b || a === c || b === c ) {
        alert("Isosceles Triangle");
    }
    
      else if (a+b>c && b+c>a && a+c> b && a !==  b !== c ) {
        alert("Scalene Triangle");
    }

    else{
      alert("Error. Check the values provided")
    }
  }




 
    


    