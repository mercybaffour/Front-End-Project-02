function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function validateForm2() {
    var x = document.forms["comment"]["name"].value;
    var y = document.forms["comment"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } else if (y == ""){
      alert("Email must be filled out");
      return false;
    }
  }
