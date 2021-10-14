let Begin = prompt("Who's there ?","");{

      if( Begin == "Admin"){

            let Pass = prompt("Password","");{

                  if( Pass == "TheMaster")

                  alert("Welcom!");

                  else if( Pass == null || Pass == "" )

                  alert("Canceled");

                  else 

                  alert("Wrong passowrd");
            }
      }

      else if( Begin == null || Begin == "" )

      alert("Canceled");

      else

      alert("I don't know you");



}

