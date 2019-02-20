function myFunction() {
  var x, text;

  x = document.getElementById("inputNumber").value;

  if (x != 31) {
    alert("You got it Wrong :(.\nLets help you out.\n HINT: 1988");
	document.getElementById("inputNumber").value = "";
	return false;
  } else {
    document.main.submit();
  }
}