function myFunction5_1() {
  var x, text;

  x = document.getElementById("inputText").value;

  if (x.toLowerCase() != "summer clothes") {
    alert("Damn... Lets Think about it.\n\n Sun + Clothes what could it be?");
	document.getElementById("inputText").value = "";
	return false;
  } else {
    document.page5_1.submit();
  }
}