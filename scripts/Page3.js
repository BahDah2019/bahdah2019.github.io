function myFunction() {
  var x, text;

  x = document.getElementById("inputNumber").value;

  if (x != 13) {
    alert("You got it Wrong Again!\n\nBuy a new Calculator!!!");
	document.getElementById("inputNumber").value = "";
	return false;
  } else {
    document.page3.submit();
  }
}