let x = prompt("x?", "");

let n = prompt("n?", "");

      if(n < 1) {

            alert("invalid");
      } else {

            alert( pow(x, n));
      }

 function pow(x, n) {

       let resultat = x;

       for( let i = 1; i < n; i++) {

            resultat *= x;
       }

       return resultat;
      }