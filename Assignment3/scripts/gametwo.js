let url = 'https://pokeapi.co/api/v2/type/';

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var end = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            window.location = "game-two-results.html";
            clearInterval(end);
        }
    }, 1000);
}

window.onload = function () {
    var twentyMinutes = 20 * 60,
        display = document.querySelector('.timer');
    startTimer(twentyMinutes, display);

    fetch(url)
          .then(response => response.json()) 
          .then(function(data){
              var types = [];
              for(let i = 0; i < 18; i++){
                console.log(data.results[i].name);
                types.push(data.results[i].name);
              }
              max = 18;
              min = 0;
              var word = types[Math.floor(Math.random() * (max - min) + min)].toUpperCase();
              console.log(word);
              $(".header").replaceWith(`NAME AS MANY ${word} TYPE POKEMON AS YOU CAN!`);
    });
};