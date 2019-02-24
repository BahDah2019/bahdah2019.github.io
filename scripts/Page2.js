function myFunction() {
  var x, text;

  x = document.getElementById("inputNumber").value;

  if (x != 11) {
    alert("You got it Wrong!\n\nMaybe try a calculator?");
	document.getElementById("inputNumber").value = "";
	return false;
  } else {
    document.page2.submit();
  }
}