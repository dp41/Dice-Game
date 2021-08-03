document.querySelector("button").addEventListener("click", play);

function play() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var DiceImage = "dice" +randomNumber +".png";
  var imageSource = "images/" + DiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", imageSource);
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var imageSource2 = "images/dice" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
  
  if (randomNumber > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if (randomNumber2 > randomNumber) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }   
}





