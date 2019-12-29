//Variable Declaration
var buttons = document.querySelectorAll(".item");
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
var middle = [];
var enRoute = [];
var toWin = ["123", "456", "789", "147", "258", "369", "159", "357"];
var finalRes = {};
var count = 0;
var j = 0;
var k = 0;
var array = [];
var arrayX = [];
var arrayO = [];
var waysTowin = collate(toWin);

$(".item").one("click", doSomething);

function doSomething(event) {
  //Class the array of X and O
  if (optionArray[count] == "x") {
    arrayX[j] = this.value;
    j++;
  }
  if (optionArray[count] == "o") {
    arrayO[k] = this.value;
    k++;
  }

  //Function ot check who wins
  whoWins();

  this.innerText = optionArray[count];
  // console.log(this.value);
  // console.log("XX " + arrayXtoString);
  // console.log("OO " + arrayOtoString);
  // console.log(waysTowin);
  count++;
}

//Functions
function whoWins() {
  //convert array to string on demand
  var arrayXtoString = arrayX.join("");
  var arrayOtoString = arrayO.join("");

  waysTowin.forEach(way => {
    if (way === arrayXtoString) {
      console.log("x wins");
      //disables click event after winner is found
      $(".item").off("click");
    }
  });

  waysTowin.forEach(way => {
    if (way === arrayOtoString) {
      console.log("o wins");
      //disables click event after winner is found
      $(".item").off("click");
    }
  });
}
function collate(arr) {
  for (var i = 0; i < arr.length; i++) {
    //convert string to array
    middle[i] = arr[i].split("");

    enRoute[i] = [
      middle[i][0] + middle[i][1] + middle[i][2],
      middle[i][0] + middle[i][2] + middle[i][1],
      middle[i][1] + middle[i][0] + middle[i][2],
      middle[i][1] + middle[i][2] + middle[i][0],
      middle[i][2] + middle[i][0] + middle[i][1],
      middle[i][2] + middle[i][1] + middle[i][0]
    ];
  }
  finalRes.combined = enRoute[0].concat(
    enRoute[1],
    enRoute[2],
    enRoute[3],
    enRoute[4],
    enRoute[5],
    enRoute[6],
    enRoute[7]
  );
  //console.log(combined);
  return finalRes.combined;
}
// console.log(waysTowin);
