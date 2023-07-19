let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let scores = 20;
let highscores = 0;

document.querySelector(".guess").addEventListener("click", function () {
  let val = Number(document.querySelector(".text").value);

  if (!val) {
    document.querySelector(".status").textContent = "No number ❎";
  } else if (val == secretnumber) {
    document.querySelector(".status").textContent = "Correct answer ✔";
    document.querySelector(".container").style.backgroundColor = "#60b347";

    if (scores > highscores) {
      highscores = scores;
      document.querySelector(".highscore").textContent = highscores;
      console.log("High score updated:", highscores);
    }
  } else if (val < secretnumber) {
    if (scores > 1) {
      document.querySelector(".status").textContent = "Low⬇, try more";
      scores--;
      document.querySelector(".score").textContent = scores;
    } else {
      document.querySelector(".status").textContent = "You lost the game! 🔚";
      document.querySelector(".score").textContent = 0;
    }
  } else if (val > secretnumber) {
    if (scores > 1) {
      document.querySelector(".status").textContent = "High⬆, try more";
      scores--;
      document.querySelector(".score").textContent = scores;
    } else {
      document.querySelector(".status").textContent =
        "You lost the game! Try again!";

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  scores = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretnumber);
  document.querySelector(".status").textContent = "Guessing the number...! 🤔";
  document.querySelector(".score").textContent = scores;
  document.querySelector(".container").style.backgroundColor = "white";
  //   document.querySelector(".highscore").textContent = scores;
  document.querySelector(".text").value = "";
});
