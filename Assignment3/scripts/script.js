let url = 'https://pokeapi.co/api/v2/pokedex/';

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
        $('nav').removeClass('navbar');
        $('nav').removeClass('bg-light');
    }
    else{
        $('nav').removeClass('black');
    }
});
//create a pokemon function
function Pokemon(name, hp, attack, defense, spattack, spdefense, speed, type, ability){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spattack = spattack;
    this.spdefense = spdefense;
    this.speed = speed;
    this.type = type
    this.ability = ability
}

$(function () { //shorthand for jquery document ready
    $(".btn").on('click',function (event) {
        event.preventDefault();

        //Step 1: Check the region chosen
        fetch(url)
          .then(response => response.json()) 
          .then(function(data){
            let name = document.getElementById('myInput').value;
            console.log(name);
            let region = 'national';
            console.log(region);
            for(let i = 0; i < data.results.length; i++){
                if(region == data.results[i].name){
                    console.log(data.results[i].name)
                    url2 = data.results[i].url;
                }
            }

            //Step 2: Find pokemon
            fetch(url2)
            .then(response => response.json()) 
            .then(function(data){
                for(let t = 0; t < data.pokemon_entries.length - 1; t++){
                    let poke_name = data.pokemon_entries[t].pokemon_species.name;
                    let poke_no = data.pokemon_entries[t].entry_number;
                    if(name.toLowerCase() == poke_name || name == poke_no){
                        console.log(poke_name);
                        url3 = data.pokemon_entries[t].pokemon_species.url;
                    }
                }

                //Step 3: Get pokemon stats
                fetch(url3)
                .then(response => response.json()) 
                .then(function(data){
                    //Get national dex id
                    let id = data.pokedex_numbers[0].entry_number;
                    console.log(id);
                    url4 = `https://pokeapi.co/api/v2/pokemon/${id}/`;
                    localStorage.setItem('url', url4);

                    fetch(url4)
                    .then(response => response.json()) 
                    .then(function(data){
                        let mname = data.forms[0].name;
                        let hp = data.stats[0].base_stat;
                        let attack = data.stats[1].base_stat;
                        let defense = data.stats[2].base_stat;
                        let spattack = data.stats[3].base_stat;
                        let spdefense = data.stats[4].base_stat;
                        let speed = data.stats[5].base_stat;

                        if(data.types.length == 2){
                            var type = `${data.types[0].type.name}, ${data.types[1].type.name}`;
                        }
                        else{
                            var type = `${data.types[0].type.name}`;
                        }

                        if(data.abilities.length == 2){
                            var ability = `${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`;
                        }
                        else{
                            var ability = `${data.abilities[0].ability.name}`;
                        }

                        let pokemon = new Pokemon(mname, hp, attack, defense, spattack, spdefense, speed, type, ability);
                        let giantpokeball = [];
                        giantpokeball.push(pokemon);

                        console.log(mname);
                        console.log(attack);
                        console.log(defense);
                        console.log(spattack);
                        console.log(spdefense);
                        console.log(speed);
                        console.log(type);
                        console.log(ability);
                     
                        
                        localStorage.setItem('pokemon', JSON.stringify(pokemon));

                        window.location = "pages/pokestats.html";
                    });
                });
            });
        });
    });

    var urls = "https://pokeapi.co/api/v2/pokedex/1/";
    fetch(urls)
        .then(response => response.json()) 
        .then(function(data){
            var pokeList = [];
            for(let i = 0; i < data.pokemon_entries.length; i++){
                pokeList.push(data.pokemon_entries[i].pokemon_species.name);
            }
            console.log(pokeList.length);

            function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function(e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                closeAllLists();
                if (!val) { return false;}
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function(e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                    }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function(e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 38) { //up
                    /*If the arrow UP key is pressed,
                    decrease the currentFocus variable:*/
                    currentFocus--;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } else if (e.keyCode == 13) {
                    /*If the ENTER key is pressed, prevent the form from being submitted,*/
                    e.preventDefault();
                    if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                    }
                }
            });
            function addActive(x) {
                /*a function to classify an item as "active":*/
                if (!x) return false;
                /*start by removing the "active" class on all items:*/
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                /*add class "autocomplete-active":*/
                x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
                /*a function to remove the "active" class from all autocomplete items:*/
                for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
                }
            }
            function closeAllLists(elmnt) {
                /*close all autocomplete lists in the document,
                except the one passed as an argument:*/
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
                }
            }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
            }
            autocomplete(document.getElementById("myInput"), pokeList);
        });
});

