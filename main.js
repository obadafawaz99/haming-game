const letters = "abcdefghijklmnopqrstuvwxyz";
let arrayLet = Array.from(letters);
let letterContainer = document.querySelector(".letters");
arrayLet.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  letterContainer.appendChild(span);
});
const words = {
  programming: ["php", "laravel", "html", "css", "js", "node"],
  movies: ["hary potter", "now you see me", "the expendables", "Rambo"],
  people: ["kaka",'ronaldo', "colombos", "hetler", "crestiano"],
  counters: ["germany", "swedch", "engiltra", "libia",'egypt'],
};
let allKeys = Object.keys(words);
let randoumProNumber = Math.floor(Math.random() * allKeys.length);
let randoumProName = allKeys[randoumProNumber];
let randoumProValue = words[randoumProName];
let randoumValueNumber = Math.floor(Math.random() * randoumProValue.length);
// console.log(randoumProValue);
let randomValueValue = randoumProValue[randoumValueNumber];
// console.log(randomValueValue);
document.querySelector(".game-info .categorey span").innerHTML = randoumProName;
let letterguess = document.querySelector(".letter-gues");
let myarr = Array.from(randomValueValue);
myarr.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.className = "with-space";
  }
  letterguess.appendChild(emptyspan);
});
let gusseSpan = document.querySelectorAll(".letter-gues span");
let wrongAttrmps = 0;
let theDraw = document.querySelector(".hang-draw");
document.addEventListener("click", (e) => {
  let thestatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let theclickedLetter = e.target.innerHTML.toLowerCase();
    let theChoeseWord = Array.from(randomValueValue.toLowerCase());
    theChoeseWord.forEach((wordletter, wordIndex) => {
      if (theclickedLetter === wordletter) {
        thestatus = true;
        gusseSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = wordletter;
          }
        });
      }
    });
    if (thestatus !== true) {
      wrongAttrmps++;
      theDraw.classList.add(`wrong-${wrongAttrmps}`);
      document.getElementById("fail").play();
      if (wrongAttrmps === 8) {
        endgame();
        letterContainer.classList.add("finish");
      }
    } else {
      let suc = 0;
      for (let i = 0; i < gusseSpan.length; i++) {
        if (gusseSpan[i].innerHTML !== "") {
          suc++;
          document.getElementById("win").play();
        }
      }
      if (suc == randomValueValue.length) {
        letterContainer.classList.add("finish");
        success();
      }
    }
  }
});
function endgame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over,The word is ${randomValueValue}`
  );
  div.appendChild(divText);
  div.className = "poupap";
  document.body.appendChild( div );
  document.getElementById("end").play();
}
function success() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Great, number of wrong is ${wrongAttrmps}`
  );
  div.appendChild(divText);
  div.className = "poupap1";
  document.body.appendChild( div );
            document.getElementById("sucess").play();
}
