// alert("dont be a loc");

var buttons = document.querySelectorAll(".item");
//
var one = document.getElementById("item-1");
var two = document.getElementById("item-2");
var three = document.getElementById("item-3");
var four = document.getElementById("item-4");
var five = document.getElementById("item-5");
var six = document.getElementById("item-6");
var seven = document.getElementById("item-7");
var eight = document.getElementById("item-8");
var nine = document.getElementById("item-9");

var optionArray = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
var count = 0;
var j = 0;
var k = 0;
var array = [];
var arrayX = [];
var arrayO = [];

//WORKS
// for (var i = 0; i < buttons.length; i++) {
//    (function(i) {
//     buttons[i].addEventListener("click", function() {
//       buttons[i].innerText = optionArray[count];
//       array[count] = i;
//       count++;
//       console.log("Clicked index: " + i);
//       console.log(array);
//       //record button values as they are clicked
//     });
//   })(i);
// }

// WORKS TOO

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     buttons[i].innerText = optionArray[count];
//     count++;
//     // console.log("Clicked index: " + this.value);
//   });
// }

$(".item").one("click", doSomething);

function doSomething(event) {
  // Do things...

  //Class the array of X and O
  if (optionArray[count] == "x") {
    arrayX[j] = this.value;
    j++;
  }
  if (optionArray[count] == "o") {
    arrayO[k] = this.value;
    k++;
  }

  this.innerText = optionArray[count];
  // console.log(this.value);
  console.log("XX " + arrayX);
  console.log("OO " + arrayO);
  count++;
}
