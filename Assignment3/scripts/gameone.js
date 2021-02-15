const url = "https://pokeapi.co/api/v2/pokemon/";
let pic = document.querySelector(".poke");
let submit = document.querySelector(".btn");
let answer = document.querySelector(".answer");
let blurp = document.querySelector(".poke");
let gameround = document.querySelector(".count-rounds");
let gamecorrect = document.querySelector(".count-correct");


class Pokemon {
    constructor(name, picture) {
        this.name = name;
        this.picture = picture;
    }
}

function everything() {
    if (localStorage.getItem("round") === null) {
        round = 10;
        correct = 0;
        var seenpokemon = [];
    }else {
        round = localStorage.getItem("round");
        correct = parseInt(localStorage.getItem("correct"));
        var seenpokemon = JSON.parse(localStorage.getItem("seenpokemon"));
    }
    if (round < 1) {
        window.location.href = "game-one-lottie.html"; 
    }
    gameround.innerText = "Round: "+round;
    gamecorrect.innerText = "Score: "+correct;
    console.log(round);
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let num = Math.ceil(Math.random() * 19);
        while (seenpokemon.includes(num)) {
            num = Math.ceil(Math.random() * 19);
        }
        seenpokemon.push(num);
        localStorage.setItem("seenpokemon", JSON.stringify(seenpokemon));
        let newurl = data.results[num].url;
        let name = data.results[num].name;
        fetch (newurl)
        .then(response => {
            $("#count-rounds").html("Rounds: " + round);
            return response.json();
        })
        .then(data => {
            
            randpkm = new Pokemon(name, data.sprites.front_default);
            pic.src = randpkm.picture;
            answer.innerText = randpkm.name.toUpperCase();
            console.log(randpkm)
    
            submit.addEventListener("click", function(event) {
                event.preventDefault();
                let input = document.querySelector(".form-control").value;
                if (input.toLowerCase() == randpkm.name.toLowerCase()) {
                    document.body.style.backgroundColor = "#7CB345";
                    correct += 1;
                }else{
                    document.body.style.backgroundColor = "#C95E5E";
                }
                console.log("input:"+input);
                console.log("answer:"+randpkm.name);
                console.log("correct:"+correct);
                console.log("round:"+round);
                round -= 1;
                localStorage.setItem("round", round);
                localStorage.setItem("correct", correct);
                answer.style.display ="block";
                blurp.style.filter = "none";
                input.value = "";
                return;
            })
        })
        
    })
}

function gonext(){
    location.reload();
}

everything();

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
});