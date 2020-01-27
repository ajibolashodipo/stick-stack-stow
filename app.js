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
let tieCount, oCount;
let men = 47;

//testrun
let tallyX;
let tallyY;
let tallyTie;

//onload event to update X's score in real time
window.addEventListener("load", event => {
  console.log("page is fully loaded");
  //For player X
  //checks if array exists in storage, if not, it assigns an empty array to it
  tallyX = JSON.parse(localStorage.getItem("tallyX")) || [];
  console.log(tallyX);
  //gets the last index (current high score) from the array
  const agbeke = tallyX[tallyX.length - 1];
  console.log(agbeke);
  //renders high score on the screen
  $(".player-1-value").text(agbeke);

  //For player O
  //checks if array exists in storage, if not, it assigns an empty array to it
  tallyY = JSON.parse(localStorage.getItem("tallyY")) || [];
  console.log(tallyY);
  //gets the last index (current high score) from the array
  const temmy = tallyY[tallyY.length - 1];
  console.log(temmy);
  //renders high score on the screen
  $(".player-2-value").text(temmy);

  //For Player Draw
  tallyTie = JSON.parse(localStorage.getItem("tallyTie")) || [];
  console.log(tallyTie);
  //gets the last index (current high score) from the array
  const bisola = tallyTie[tallyTie.length - 1];
  console.log(bisola);
  //renders high score on the screen
  $(".player-tie-value").text(bisola);
});

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
        //Set first element of tally array to zero
        tallyX[0] = 0;
        //push increments of 1 to the end of the array
        tallyX.push(tallyX[tallyX.length - 1] + 1);
        //store tally array iin local storage
        localStorage.setItem("tallyX", JSON.stringify(tallyX));
        //get back array from local storage
        const tobi = JSON.parse(localStorage.getItem("tallyX"));
        //get most recent element of the array(the geratest number)
        const loml = tobi[tobi.length - 1];
        console.log(loml);
        //render element to screen
        $(".player-1-value").text(loml);
        //initiate the modal
        $("#my-modal").modal("show");
        break;
      }
    }
  }

  //to check for a tie
  if (!tieTracker && arrayXtoString.length === 5) {
    $(".item").off("click");
    console.log("a draw ");

    //Update score on local storage
    //Set first element of tally array to zero
    tallyTie[0] = 0;
    //push increments of 1 to the end of the array
    tallyTie.push(tallyTie[tallyTie.length - 1] + 1);
    //store tally array iin local storage
    localStorage.setItem("tallyTie", JSON.stringify(tallyTie));
    //get back array from local storage
    const tobi = JSON.parse(localStorage.getItem("tallyTie"));
    //get most recent element of the array(the geratest number)
    const loml = tobi[tobi.length - 1];
    console.log(tobi);
    //render element to screen
    $(".player-tie-value").text(loml);

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

        //Update score on local storage
        //Set first element of tally array to zero
        tallyY[0] = 0;
        //push increments of 1 to the end of the array
        tallyY.push(tallyY[tallyY.length - 1] + 1);
        //store tally array iin local storage
        localStorage.setItem("tallyY", JSON.stringify(tallyY));
        //get back array from local storage
        const tobi = JSON.parse(localStorage.getItem("tallyY"));
        //get most recent element of the array(the geratest number)
        const loml = tobi[tobi.length - 1];
        console.log(loml);
        //render element to screen
        $(".player-2-value").text(loml);

        // alert("o wins");
        $("#my-modal").modal("show");

        break;
      }
    }
  }
}

//to clear records
$("#clear-records").click(e => {
  //player O
  tallyY = [];
  tallyY[0] = 0;
  localStorage.setItem("tallyY", JSON.stringify(tallyY));
  const a = JSON.parse(localStorage.getItem("tallyY"));
  $(".player-2-value").text(a);
  //player X
  tallyX = [];
  tallyX[0] = 0;
  localStorage.setItem("tallyX", JSON.stringify(tallyX));
  const b = JSON.parse(localStorage.getItem("tallyX"));
  $(".player-1-value").text(b);
  //player tie
  tallyTie = [];
  tallyTie[0] = 0;
  localStorage.setItem("tallyTie", JSON.stringify(tallyTie));
  const c = JSON.parse(localStorage.getItem("tallyTie"));
  $(".player-tie-value").text(c);
});

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
