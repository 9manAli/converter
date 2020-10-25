var kilo = document.getElementById("kilo");
var pound = document.getElementById("pound");
var int = document.getElementById("value");
var btn = document.querySelectorAll("button");
var result = document.getElementById("result");
var kilovalue = 2.2046;
var poundvalue = 0.453592;
var c;
var d;
function addfinc(e) {
  if (e.innerHTML == kilo.innerHTML) {
    c = poundvalue;
    d = kilo.innerHTML;
    console.log(e.innerHTML + c);
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.remove("active");
    }
    kilo.classList.add("active");
  } else {
    c = kilovalue;
    d = pound.innerHTML;
    console.log(c);
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.remove("active");
    }
    pound.classList.add("active");
  }
}

function convrt() {
  result.innerHTML = "";
  console.log(c);
  console.log(c * int.value);
  var ans = c * int.value;
  result.innerHTML += ans + " " + d;
}
