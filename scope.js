// Block Scope
{
  let names = "Practice JavaScript"; // Block Scope

  function logName() {
    let test = "Inside Function"; // Function Scope
    console.log(names);

    function lexical() {
      console.log(test); // Lexical Scope
    }
    lexical();
  }
  logName();
}

function logName2() {
  console.log(names);
}

// logName2();
