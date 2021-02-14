let round = 0;
let correct = 0;
var pkmlist = [];
const url = "https://pokeapi.co/api/v2/pokemon/";
let pic = document.querySelector(".poke");
let submit = document.querySelector(".btn");
let input = document.querySelector(".form-control").value;

class Pokemon {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
    }
}

function everything() {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (var i = 0; i < data.results.length; i++) {
            let newurl = data.results[i].url;
            let name = data.results[i].name;
            fetch (newurl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                pkmlist.push(new Pokemon(name, data.sprites.front_default));
                let num = Math.ceil(Math.random() * 19)
                pic.src = pkmlist[num].picture;

                submit.addEventListener("click", function() {
                    if (input.toLowerCase() === pkmlist[num].name) {
                        correct += 1;
                    }
                    console.log("correct:"+correct);
                    console.log("round"+round);
                })
            })
        } 
    })
    round += 1;
    /*
    everything();
    return;*/
}

everything();
/*
if (round === 11) {
    location.replace("game-one-results.html");
}*/

