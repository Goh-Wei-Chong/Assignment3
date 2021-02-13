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
              var num = Math.floor(Math.random() * (max - min) + min);
              var word = types[num].toUpperCase();
              console.log(word);
              $(".header").append(`NAME AS MANY ${word} TYPE POKEMON AS YOU CAN!`);

              url2 = `https://pokeapi.co/api/v2/type/${num + 1}`;
              fetch(url2)
                    .then(response => response.json()) 
                    .then(function(data){
                        var pokeList = [];
                        var usedNames = [];
                        var points = 0;
                        var usedname = false;
                        var correct = false;
                        console.log(data.name);
                        for(let i = 0; i < data.pokemon.length; i++){
                            if(data.pokemon[i].pokemon.name.includes("-") == false){
                                console.log(data.pokemon[i].pokemon.name);
                                pokeList.push(data.pokemon[i].pokemon.name);
                            }
                        };
                        
                        console.log(pokeList.length);
                        localStorage.setItem('total', pokeList.length);

                        $(".btn").on('click',function (event) {
                            event.preventDefault();
                            let name = document.getElementById('name').value;
                            console.log(name);
                            for(let y = 0; y < usedNames.length; y++){
                                if(name == usedNames[y]){
                                    $("div.wrong").text("Name has been used before, try again");
                                    usedname = true;
                                };
                            };
                            for(let i = 0; i < pokeList.length; i++){
                                if(name == pokeList[i]){
                                    $('.pokename-box').text('');
                                    points += 1;
                                    usedNames.push(pokeList[i]);
                                    pokeList.splice(i, 1);
                                    localStorage.setItem('points', points);
                                    $("div.wrong").text("");
                                    correct = true;

                                    url3 = `https://pokeapi.co/api/v2/pokedex/1/`
                                    fetch(url3)
                                        .then(response => response.json()) 
                                        .then(function(data){
                                            for(let i = 0; i < data.pokemon_entries.length; i++){
                                                if(name == data.pokemon_entries[i].pokemon_species.name){
                                                    url4 = `https://pokeapi.co/api/v2/pokemon/${data.pokemon_entries[i].entry_number}/`
                                                    fetch(url4)
                                                        .then(response => response.json()) 
                                                        .then(function(data){
                                                            var y = `<img class="center-sprite" src=${data.sprites.other["official-artwork"].front_default} alt="sprite">`;
                                                            $('.pokename-box').append(y);
                                                        });
                                                }
                                            }
                                        });
                                };
                            };
                            if(correct == false && usedname == false){
                                $("div.wrong").text("Name of pokemon is not correct, try again");
                            }
                            correct = false;
                            usedname = false;
                        });
                    });
    });
};