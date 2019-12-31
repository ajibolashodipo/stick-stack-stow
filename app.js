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
var stopee = 0;
var array = [];
var arrayX = [];
var arrayO = [];
var waysTowin = collate(toWin);
var stopGap = [];
var stopGapCollector = [];
var finesser = {};
var men = 47;

$(".item").one("click", doSomething);

//main function
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

  //Function to check who wins
  whoWins();

  this.innerText = optionArray[count];
  count++;
}

//Functions
function whoWins() {
  //convert array to string on demand
  var arrayXtoString = arrayX.join("");
  var arrayOtoString = arrayO.join("");

  for (way of waysTowin) {
    //to ensure that stuff only runs when the array contains at least 3 elements
    if (arrayXtoString.length > 2) {
      //initializing loop that runs 3 times. Simulating ways to win
      for (var g = 0; g < 3; g++) {
        //checks if waystoWin is in the arrayX.
        // String method Search returns -1 if there is no match.
        //So it makes sense to add +1 to make it 0;
        stopGap[g] = arrayXtoString.search(way[g]) + 1;
      }

      //conditional to find out if array contains a match
      if (!stopGap.includes(0)) {
        // console.log("itemstopgp " + stopGapCollector);
        console.log("x wins ajj ");
        //to disable click event after winner is found
        $(".item").off("click");
        break;
      } else if (stopGap.includes(0) && arrayXtoString.length === 5) {
        // console.log("tiedinyou " + stopGapCollector);
        //to disable click event after winner is found
        $(".item").off("click");
        console.log("a draw");
        break;
      }
    }
  }

  for (way of waysTowin) {
    //to ensure that stuff only runs when the array contains at least 3 elements
    if (arrayOtoString.length > 2) {
      //initializing loop that runs 3 times. Simulating ways to win
      for (var g = 0; g < 3; g++) {
        //checks if waystoWin is in the arrayX.
        // String method Search returns -1 if there is no match.
        //So it makes sense to add +1 to make it 0;
        stopGap[g] = arrayOtoString.search(way[g]) + 1;
        console.log(way + way[g]);
      }

      //conditional to find out if array contains a match
      if (!stopGap.includes(0)) {
        // console.log("itemstopgp " + stopGapCollector);
        console.log("O wins ");
        //to disable click event after winner is found
        $(".item").off("click");

        break;
      }
    }
  }
}
//Function to find all possible permutations (they are 48 by the way) of winning a tic tac toe game.
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
//console.log(waysTowin);
