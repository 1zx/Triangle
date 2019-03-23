function triangleTracker(){
    var a = parseInt(prompt("Enter the length"));
    var b = parseInt(prompt("Enter the length"));
    var c = parseInt(prompt("Enter the hypo"));

    if (a ===b && b === c && c === a) {
        alert("Equilateral Triangle");
    }
      else if (a === b || a === c || b === c ) {
        alert("Isosceles Triangle");
    }
      else if ((a+b)<c || (a+c)<b || (b+c)<a) {
        alert("THIS IS NOT A Triangle");
    }
      else if (a !== b && b !== c && a!==c ) {
        alert("Scalene Triangle");
    }
  }




 
    


    