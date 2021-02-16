# Interactive Development(ID) Assignment 3 - Pokémon Website

We have created this website before, but only with a purpose of searching for information of pokemon, now we will create a website with additional features such as searching for pokemon and games to create more variety.

With so many pokémon in this day and age, with 151 in the 1st generation and now over 890 with its latest new generation, many can even remember all the pokémon there are now much less the information about each and every pokémon. There are also users who are playing a pokemon game that want to search up information about their team or want to compare stats or other information between other pokemon. With this situation, we decided to create a pokédex that can search for any pokemon based on name, region and ID number. This will help to allow any user to search for the information for the pokémon and learn more about them. However, having a website just for searching seems boring and thus we chose to add games into it as well, this would make the website both informational and fun to use as we add in games such as Who's that pokemon and Pokemon Blitz!

Wei Chong previously created this website before for assignment 2 so we plan to have this be a upgrade to the previous website, adding new features and games to allow different variety of uses of our website. Wei Chong's assignment 2 will be the main reference to create the website.

## Design 
### Design Process
For the design process of the website, we first created a basic design template using a free online sotware called Figma. We then 
proceeded to create the basic html and css designs and layouts for the home page. The games section was split between the two of us to do
individually, with Aung creating the Who's That Pokemon game and Wei Chong creating the Pokemon Blitz game.
## Figma Link
The link is [here](https://www.figma.com/proto/e7mGaxu2FsH8P8N41im7F9/Untitled?node-id=1%3A2&scaling=scale-down-width)

## Features
 
### Existing Features
- Name or ID feature - allows users to find the pokémon they want to search for by entering the name or ID of that certain pokémon
- Search feature - allows the user to search for the pokémon and allows the website to show them information about said pokémon
### Existing Game Features
- Who's That Pokemon - This game replicates the popular game "Who's that pokemon" which was usually displayed before the advertisments of
old pokemon episodes. Players have 10 rounds to name the blurred out pokemon displayed on the screen. This allows players to test their
pokemon knowledge and see if they can name the pokemon by justt seeing the blurred pokemon.
- Pokemon Blitz - This game is to test the users knowledge of pokemon, prompting them for the names of certain types of pokemon in a 20 minute time limit, this games is for users who are confident in their pokemon knowledge to take up this hard challenge to name all pokemon, keeping the users on their toes.
## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [PokéAPI](https://pokeapi.co/)
    - The project uses **PokéAPI** to get all information about every pokémon.
- [BootStrap](https://getbootstrap.com/docs/3.3/getting-started/)
    - The project uses **BootStrap** to get easy already made classes.
- [RadarCharts](https://cdn.anychart.com/releases/8.7.1/js/anychart-radar.min.js)
    - The project(specifically the Pokestats page) uses **RadarCharts** to view the pokemon stats on a radar chart. 
- [Lottie](https://assets6.lottiefiles.com/temp/lf20_Tw0dyZ.json)
    - The project uses **Lottie** as a loading screen between the game pages and the game results pages.
- Visual Studio Code was the app we used to create my website.

### Techniques and Libraries
- HTML - Our HTML page links to a [bootstrap](https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js), [JQuery](https://code.jquery.com/jquery-3.5.1.slim.min.js) and [Radar graphs](https://cdn.anychart.com/releases/8.7.1/js/anychart-radar.min.js) to allow the website to use classes in bootstrap in our website and allow our Javascripts to use JQuery to simplify coding.

- Javascript - Our Javascript makes use of JQuery, fetch, classes, localstorage and radar graphs. JQuery makes retrieving of classes much faster and the fetch code allows us to fetch an API to retrieve the content within it. The making of classes help to contain the stats and abilities of pokemon within the class and the localstorage helps to store the class of the pokemon and several urls that can be retrieved later on. Radar graphs were used to show off the stats of the pokemon rather than using a bar graph. 
## Testing
1. Who's That Pokemon Errors
    1. Pressing submit multiple times increases the rounds count by that number.

2. Pokemon Blitz
    1. In media query, in phone mode, the pokemon images do not fit into the box allocated for it neatly, some arts are pointing out of the box out. 

## Credits

### Content
- The api we used for this assignment is from here [PokéAPI](https://pokeapi.co/)

### Media
- The pokeball logo we used was from [ClipArt](https://www.clipartkey.com/view/hmmhib_pokeball-logo-png-pokemon-center/)
  
- The pokemon logo was from [Wikimedia](https://commons.wikimedia.org/wiki/File:International_Pok%C3%A9mon_logo.svg)
- The ditto image was from [Pokemon Pets](https://www.pokemonpets.com/Ditto-Pokemon-Pokedex-132)
- The mew image was from [VHV.rs](https://www.vhv.rs/viewpic/hbwimhi_transparent-mew-png-pokemon-mew-png-download/)
- The word font we used that is similar to the pokemon logo is from [Fontmeme](https://fontmeme.com/pokemon-font/) 
- The pikachu gif was from [tenor](https://tenor.com/view/pikachu-oh-yeah-sticker-line-pokemon-gif-13625545)
- The pokemon fire red images were from [pokedream](http://pokedream.com/games/fireleaf/walkthrough/17-island1_2.php)
### Acknowledgements

- We received great inspiration for the layout design of pokémon information for this project from [PokémonDB](https://pokemondb.net/)


## Small note
I(Wei Chong) have my github somehow connected to my other email (101.21.gohweichong@gmail.com) instead on my school email, thus this github I am using is not from my school account but a normal email. To avoid any screw ups when messing with the visual studio code to connect to my school account, I decided to continue using this account.
 
## Github Link
Link -  https://goh-wei-chong.github.io/ID_P02_Asgn3/
