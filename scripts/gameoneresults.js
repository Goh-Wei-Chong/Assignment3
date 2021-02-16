let correct = localStorage.getItem("correct");
let score = document.querySelector(".score");
score.innerText = correct+"/10";
localStorage.clear();