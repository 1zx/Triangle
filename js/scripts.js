function triangleTracker(){
    var a = parseInt(prompt("Enter the length"));
    var b = parseInt(prompt("Enter the length"));
    var c = parseInt(prompt("Enter the hypo"));

    if (a==0 && b==0 && c==0){
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




 
    


    