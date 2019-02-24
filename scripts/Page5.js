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

function myFunction5_2() {
  var x, text;

  x = document.getElementById("inputText").value;
  
  if (x.toLowerCase() != "sense of humour") {
    alert("Jokes aside... thought you had this...");
	document.getElementById("inputText").value = "";
	return false;
  } else {
    document.page5_2.submit();
  }
}

function myFunction5_3() {
  var x, text;

  x = document.getElementById("inputText").value;

  if (x.toLowerCase() != "ethan hunt's game face") {
    alert("What a 'Gameface' it is...");
	document.getElementById("inputText").value = "";
	return false;
  } else {
    document.page5_3.submit();
  }
}

function myFunction5_4() {
  var x, text;

  x = document.getElementById("inputText").value;

  if (x.toLowerCase()!= "james bond's passion for love") {
    alert("For the passion of love... you got this!!!");
	document.getElementById("inputText").value = "";
	return false;
  } else {
    document.page5_4.submit();
  }
}