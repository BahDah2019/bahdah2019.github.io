function myFunction() {
  var x, text;

  x = document.getElementById("inputTextS").value;
  y = document.getElementById("inputTextE").value;
  
  if ((x != "30.6924") && (y!= "30.1796")) {
    alert("You dont have to do much, just get the values from me...");
  document.getElementById("inputTextS").value = "";
  document.getElementById("inputTextE").value = "";
	return false;
  } else {
    document.page8.submit();
  }
}