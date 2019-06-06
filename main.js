function myFunction(event) {
    var x = event.key;
    var y = event.which;
    var z = event.code;
    document.getElementById("key").innerHTML = "event.key " + x;
    document.getElementById("which").innerHTML = "event.which " + y;
    document.getElementById("code").innerHTML = "event.code " + z;
  }

  
  