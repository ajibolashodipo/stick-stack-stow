//Variable Declaration
var buttons = document.querySelectorAll(".item");
var one = document.querySelector(".item-1");
var two = document.querySelector(".item-2");
var three = document.querySelector(".item-3");
var four = document.querySelector(".item-4");
var five = document.querySelector(".item-5");
var six = document.querySelector(".item-6");
var seven = document.querySelector(".item-7");
var eight = document.querySelector(".item-8");
var nine = document.querySelector(".item-9");
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
var finesser = {
  // tieTracker: 0
};

let xC = localStorage.setItem("countX", "0");
let yC = localStorage.setItem("countO", "0");
let tC = localStorage.setItem("tieC", "0");
var men = 47;
// var tieTracker = 0;
// document.querySelector(".main-text").style.color = "blue";
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

    //to change the color of player O to another colour.
    //Here i am trying to extract the classname by some brute weird flex
    that = this;
    finesser.that = "." + that.className.split(" ")[1];
    //console.log(finesser.that);

    //DOM manipulation to change the colour of 'o'
    document.querySelector(finesser.that).style.color = "blue";
  }
  // one.style.color = "orange";
  this.innerHTML = optionArray[count];
  count++;
  //Function to check who wins
  whoWins();

  //displays X or O on the screen
}

//Functions
function whoWins() {
  // document.querySelector(finesser.that).style.color = "blue";

  //one.style.color = "orange";
  // finesser.that.style.color = "green";
  var tieTracker = 0;
  //convert array to string on demand
  var arrayXtoString = arrayX.join("");
  var arrayOtoString = arrayO.join("");

  //ways to win for player X
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
      //question: i am not able to create an array
      //outside the for loop to track the value of stopGap array. And i don't understand why

      //conditional to find out if array contains a match
      if (!stopGap.includes(0)) {
        // console.log("itemstopgp " + stopGapCollector);
        console.log("x wins ");
        $(".modal-character").text("X wins");

        tieTracker++;
        //to disable click event after winner is found
        $(".item").off("click");

        //Update score on local storage
        let xTemp = JSON.parse(localStorage.getItem("countX"));

        //alert("x wins");
        $("#my-modal").modal("show");
        break;
      }
    }
  }

  //to check for a tie
  if (!tieTracker && arrayXtoString.length === 5) {
    $(".item").off("click");
    console.log("a draw ");
    $(".modal-character").text("No winner. A draw");
    $("#my-modal").modal("show");
  }

  //ways to win for player O
  for (way of waysTowin) {
    //to ensure that stuff only runs when the array contains at least 3 elements
    if (arrayOtoString.length > 2) {
      //initializing loop that runs 3 times. Simulating ways to win
      for (var g = 0; g < 3; g++) {
        //checks if waystoWin is in the arrayX.
        // String method Search returns -1 if there is no match.
        //So it makes sense to add +1 to make it 0;
        stopGap[g] = arrayOtoString.search(way[g]) + 1;
      }

      //conditional to find out if array contains a match
      if (!stopGap.includes(0)) {
        // console.log("itemstopgp " + stopGapCollector);
        console.log("O wins ");
        $(".modal-character").text("O wins");

        //to disable click event after winner is found
        $(".item").off("click");
        // alert("o wins");
        $("#my-modal").modal("show");

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

    //the individual permutations of each string turned array. Say '143'=>[1,4,3],[4,1,3]
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
