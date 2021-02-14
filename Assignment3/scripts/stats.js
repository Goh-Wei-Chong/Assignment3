let url = localStorage.getItem('url');
console.log(url);
fetch(url)
    .then(response => response.json()) 
    .then(function(data){
    anychart.onDocumentReady(function () {
        
        // our data from bulbapedia
        let mname = data.forms[0].name;
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let spattack = data.stats[3].base_stat;
        let spdefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;
        var weight = parseFloat(data.weight) / 10;
        var height = parseFloat(data.height) / 10;

        let exp = data.base_experience;
        if(data.types.length == 2){
            var type = `${data.types[0].type.name[0].toUpperCase()}${data.types[0].type.name.slice(1)}‏‏‎‏‏‎, ${data.types[1].type.name[0].toUpperCase()}${data.types[1].type.name.slice(1)}`;
        }
        else{
            var type = `${data.types[0].type.name[0].toUpperCase()}${data.types[0].type.name.slice(1)}`;
        }

        if(data.abilities.length >= 2){
            var ability = ``;
            for(let i = 0; i < data.abilities.length; i++){
                
                if(i == data.abilities.length-1){
                    ability += `${data.abilities[i].ability.name[0].toUpperCase()}${data.abilities[i].ability.name.slice(1)}(hidden ability)`
                }
                else{
                    ability += `${data.abilities[i].ability.name[0].toUpperCase()}${data.abilities[i].ability.name.slice(1)}, `
                }
            }
        }
        else{
            var ability = `${data.abilities[0].ability.name[0].toUpperCase()}${data.abilities[0].ability.name.slice(1)}`;
        }
        var data1 = [
            {x: "Speed", value: speed},
            {x: "HP", value: hp},
            {x: "Defense", value: defense},
            {x: "Special Defense", value: spdefense},
            {x: "Special Attack", value: spattack},
            {x: "Attack", value: attack}
        ];
        
        
        // create radar chart
        var chart = anychart.radar();
        
        // set chart yScale settings
        chart.yScale()
            .minimum(1)
            .maximum(150)
            .ticks({'interval':40});
        
        // color alternating cells
        chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
        
        // create first series
        chart.area(data1).name(``).markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB")
        
        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
        console.log(data.sprites.other["official-artwork"].front_default);
        var y = `<img class="center-sprite" src=${data.sprites.other["official-artwork"].front_default} alt="sprite">`;
        $('section').prepend(y);
        $('section').append(`<div><h1><b>Pokédex data</b></h1><hr><table><tbody><tr>National №‏‏‎‏‏‎ ‎ <b>${data.id}</b></tr><hr><tr>Type(s)‏‏‎‏‏‎ ‎ ‎${type}‏‏‎‏‏‎ ‎</tr><hr><tr>Height‏‏‎‏‏‎ ‎ ${height} m</tr><hr><tr>Weight‏‏‎‏‏‎ ‎ ${weight} kg</tr><hr><tr>Abilities‏‏‎‏‏‎ ‎ ${ability}</tr><hr></tbody></table></div>`);
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)
        .then(response => response.json()) 
        .then(function(data){
            console.log(data.egg_groups[0]);
            
            if(data.egg_groups.length == 2){
                var egg_group = `${data.egg_groups[0].name[0].toUpperCase()}${data.egg_groups[0].name.slice(1)}‏‏‎‏‏‎, ${data.egg_groups[1].name[0].toUpperCase()}${data.egg_groups[1].name.slice(1)}`;
            }
            else if(data.egg_groups.length == 1){
                var egg_group = `${data.egg_groups[0].name[0].toUpperCase()}${data.egg_groups[0].name.slice(1)}`;
            }
            else{
                var egg_group = `Undiscovered`;
            }
            $('section').append(`<div><h1><b>Training</b></h1><hr><table><tbody><tr>Catch rate ‎ ${data.capture_rate}%</tr><hr><tr>Base Friendship‏‏‎‏‏‎ ‎ ‎${data.base_happiness}‏‏‎‏‏‎ ‎</tr><hr><tr>Base Exp. ‎ ${exp}</tr><hr><h1><b>Breeding</b></h1><tr>Egg Groups ‎ ${egg_group}</tr><hr><tr>Egg cycles ‎ ${data.hatch_counter}</tr><hr></tbody></table></div>`);
        });
    });
});
