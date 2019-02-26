function myFunction() {
  var x, text;

  x = document.getElementById("inputText").value;

  
  if (x.toLowerCase() != "lake eland") {
    alert("Wild Life, Game Drives, Sunsets...\n\nYou and Me !!!");
  document.getElementById("inputText").value = "";
	return false;
  } else {
    document.page8.submit();
  }
}