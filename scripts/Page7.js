function myFunction7() {
  var x,y, text;

  x = document.getElementById("inputText").value;
  y = document.getElementById("inputText").value;

  if (x != " D O W N   T H E" && y != " S O U T H   C O A S T") {
    alert("Damn... Keep going till you have filled all the gaps!!!");
	return false;
  } else {
    document.page7.submit();
  }
}

function myHang() {
var x;
x = document.getElementById("image").src;
  
if(x.match("/Assets/H.png"))
{
  document.getElementById("image").src="../Assets/H1.png";
}

if(x.match("/Assets/H1.png"))
{
  document.getElementById("image").src="../Assets/H2.png";
}

if(x.match("/Assets/H2.png"))
{
  document.getElementById("image").src="../Assets/H3.png";
}

if(x.match("/Assets/H3.png"))
{
  document.getElementById("image").src="../Assets/H4.png";
}

if(x.match("/Assets/H4.png"))
{
  document.getElementById("image").src="../Assets/H5.png";
}

if(x.match("/Assets/H5.png"))
{
  document.getElementById("image").src="../Assets/H6.png";
}

if(x.match("/Assets/H6.png"))
{
  document.getElementById("image").src="../Assets/H7.png";
}

if(x.match("/Assets/H7.png"))
{
  document.getElementById("image").src="../Assets/H8.png";
}

if(x.match("/Assets/H8.png"))
{
  document.getElementById("image").src="../Assets/H9.png";
}

if(x.match("/Assets/H9.png"))
{
  document.getElementById("image").src="../Assets/H10.png";
}

if(x.match("/Assets/H10.png"))
{
  document.getElementById("image").src="../Assets/H11.png";
  alert("Well look at you just kill yourself.\n\nI choose your punishment, but for now you get to continue.");
}

}

function myFunctionA() {
    var s = document.getElementById("inputText1").value
    var index = 17;
    s = s.substr(0, index) + 'A' + s.substr(index + 1);
    document.getElementById("inputText1").value = s;
    document.getElementById("submitA").disabled = true;
   }

   function myFunctionB() {
    document.getElementById("submitB").disabled = true;
    myHang();
  }
  
function myFunctionC() {
  var s = document.getElementById("inputText1").value
  var index = 13;
  s = s.substr(0, index) + 'C' + s.substr(index + 1);
  document.getElementById("inputText1").value = s;
  document.getElementById("submitC").disabled = true;
}
function myFunctionD() {
  var s = document.getElementById("inputText").value
  var index = 1;
  s = s.substr(0, index) + 'D' + s.substr(index + 1);
  document.getElementById("inputText").value = s;
  document.getElementById("submitD").disabled = true;
}
function myFunctionE() {
  var s = document.getElementById("inputText").value
  var index = 15;
  s = s.substr(0, index) + 'E' + s.substr(index + 1);
  document.getElementById("inputText").value = s;
  document.getElementById("submitE").disabled = true;
}
function myFunctionF() {
  document.getElementById("submitF").disabled = true;
  myHang();  
}
function myFunctionG() {
  document.getElementById("submitG").disabled = true;
  myHang();
}
function myFunctionH() {
  var s = document.getElementById("inputText").value
  var index = 13;
  s = s.substr(0, index) + 'H' + s.substr(index + 1);
  document.getElementById("inputText").value = s;

  var t = document.getElementById("inputText1").value
  var index = 9;
  t = t.substr(0, index) + 'H' + t.substr(index + 1);
  document.getElementById("inputText1").value = t;

  document.getElementById("submitH").disabled = true;
}
function myFunctionI() {
  document.getElementById("submitI").disabled = true;
  myHang();
}
function myFunctionJ() {
  document.getElementById("submitJ").disabled = true;
  myHang();
}
function myFunctionK() {
  document.getElementById("submitK").disabled = true;
  myHang();
}
function myFunctionL() {
  document.getElementById("submitL").disabled = true;
  myHang();
}
function myFunctionM() {
  document.getElementById("submitM").disabled = true;
  myHang();
}
function myFunctionN() {
  var s = document.getElementById("inputText").value
  var index = 7;
  s = s.substr(0, index) + 'N' + s.substr(index + 1);
  document.getElementById("inputText").value = s;
  document.getElementById("submitN").disabled = true;
}
function myFunctionO() {
  var s = document.getElementById("inputText").value
  var index = 3;
  s = s.substr(0, index) + 'O' + s.substr(index + 1);
  document.getElementById("inputText").value = s;

  var t = document.getElementById("inputText1").value
  t1 = t.substr(0, index) + 'O' + t.substr(index + 1);
  t2 = t1.substr(0, 15) + 'O' + t1.substr(15 + 1);
  document.getElementById("inputText1").value = t2;

  document.getElementById("submitO").disabled = true;
}
function myFunctionP() {
  document.getElementById("submitP").disabled = true;
  myHang();
}
function myFunctionQ() {
  document.getElementById("submitQ").disabled = true;
  myHang();
}
function myFunctionR() {
  document.getElementById("submitR").disabled = true;
  myHang();
}
function myFunctionS() {
  var s = document.getElementById("inputText1").value
  var index = 1;
  s = s.substr(0, index) + 'S' + s.substr(index + 1);
  document.getElementById("inputText1").value = s;

  t = s.substr(0, 19) + 'S' + s.substr(19 + 1);
  document.getElementById("inputText1").value = t;

  document.getElementById("submitS").disabled = true;
}
function myFunctionT() {
  var s = document.getElementById("inputText").value
  var index = 11;
  s = s.substr(0, index) + 'T' + s.substr(index + 1);
  document.getElementById("inputText").value = s;

  var t = document.getElementById("inputText1").value
  t1 = t.substr(0, 7) + 'T' + t.substr(7 + 1);
  t2 = t1.substr(0, 21) + 'T' + t1.substr(21 + 1);
  document.getElementById("inputText1").value = t2;

  document.getElementById("submitT").disabled = true;
}
function myFunctionU() {
  var s = document.getElementById("inputText1").value
  var index = 5;
  s = s.substr(0, index) + 'U' + s.substr(index + 1);
  document.getElementById("inputText1").value = s;
  document.getElementById("submitU").disabled = true;
}
function myFunctionV() {
  document.getElementById("submitV").disabled = true;
  myHang();
}
function myFunctionW() {
  var s = document.getElementById("inputText").value
  var index = 5;
  s = s.substr(0, index) + 'W' + s.substr(index + 1);
  document.getElementById("inputText").value = s;
  document.getElementById("submitW").disabled = true;
}
function myFunctionX() {
  document.getElementById("submitX").disabled = true;
  myHang();
}
function myFunctionY() {
  document.getElementById("submitY").disabled = true;
  myHang();
}
function myFunctionZ() {
  document.getElementById("submitZ").disabled = true;
  myHang();
}