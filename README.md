# Interactive Development(ID) Assignment 3 - Pokémon Website

I(Wei Chong) have created this website before, but only with a purpose of searching for information of pokemon, now we will create a website with additional features such as searching for pokemon and games to create more variety.

With so many pokémon in this day and age, with 151 in the 1st generation and now over 890 with its latest new generation, many can even remember all the pokémon there are now much less the information about each and every pokémon. There are also users who are playing a pokemon game that want to search up information about their team or want to compare stats or other information between other pokemon. With this situation, I decided to create a pokédex that can search for any pokemon based on name, region and ID number. This will help to allow any user to search for the information for the pokémon and learn more about them. 

I(Wei Chong) previously created this website before for assignment 2 so I plan to have this be a upgrade to the previous website, adding new features and games to allow different variety of uses of our website. My assignment 2 will be my main reference to create the website.

## Design 
Edit later
### Design Process
Edit later

## Figma Link
The link is [here](https://www.figma.com/proto/e7mGaxu2FsH8P8N41im7F9/Untitled?node-id=1%3A2&scaling=scale-down-width)

## Features
 
### Existing Features
- Check region feature - allows users who play only one or two pokémon games to get a pokémon based on the ID number of that pokémon from the region pokédex, by having them fill out which region the pokémon comes from, indirectly showing what game the user plays
- Name or ID feature - allows users to find the pokémon they want to search for by entering the name or ID of that certain pokémon
- Search feature - allows the user to search for the pokémon and allows the website to show them information about said pokémon
- Clear feature - after searching for the pokémon, if it is not the pokémon the user wanted to search for, the page could be cleared and the user can search once more

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [PokéAPI](https://pokeapi.co/)
    - The project uses **PokéAPI** to get all information about every pokémon.
- Visual Studio Code was the app I used to create my website.

### Techniques and Libraries
- HTML - My HTML page links to a [bootstrap](https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js), [JQuery](https://code.jquery.com/jquery-3.5.1.slim.min.js) and [Radar graphs](https://cdn.anychart.com/releases/8.7.1/js/anychart-radar.min.js) to allow the website to use classes in bootstrap in my website and allow my Javascripts to use JQuery to simplify coding.

- Javascript - My Javascript makes use of JQuery, fetch, classes, localstorage and radar graphs. JQuery makes retrieving of classes much faster and the fetch code allows me to fetch an API to retrieve the content within it. The making of classes help to contain the stats and abilities of pokemon within the class and the localstorage helps to store the class of the pokemon and several urls that can be retrieved later on. Radar graphs were used to show off the stats of the pokemon rather than using a bar graph.

## Testing

- Home Page - The page has a header with the pokemon logo on the top to distinctively show that this website is about pokemon. The background of the whole website is mainly a pokeball pattern background, and the first for that is needed to input is the region form where the user will choose the region pokemon to choose from. The region form has a background which is the alola region to represent that the form is about regions. After this, the user will input the ID or the name of the pokemon so that the website can search for it. There is a submit button to search for it and a clear button to clear the pokemon the users have searched for. When the page is used on a phone, the flexbox used in the regions part of the website will wrap it to fit the regions in the page. When searching for multiple pokemon, a flexbox will also wrap the display of pokemon on screen to fit in the page.

- Pokemon information page - This page will show off the main information the users will need about the pokemon, the heading is the same. The pokemon logo can be pressed to go back to the home page to search for another pokemon. The background is completely white and the page will show a image of the pokemon and below will show the stats of the pokemon using a radar chart. When the page is used on a phone, the flexbox on all information of the pokemon will be displayed in a column format, starting with the image of the pokemon, then the pokedex data table, then the training information, breeding information and lastly the stats of the pokemon.

## Credits

### Content
- The api I used for this assignment is from here [PokéAPI](https://pokeapi.co/)

### Media
- The pokemon logo I used was from [Wikimedia](https://commons.wikimedia.org/wiki/File:International_Pok%C3%A9mon_logo.svg)
- The pokeball background was from [Vectorstock](https://www.vectorstock.com/royalty-free-vector/pokeball-icon-sign-seamless-pattern-on-a-gray-vector-11297593)
- The region background was from [Pinterest](https://www.pinterest.com/pin/638737159626175520/)
- The pokemon header was from [DeviantArt](https://www.deviantart.com/puli-wind/art/Get-started-20th-Pokemon-Anniversary-pattern-584264541)

### Acknowledgements

- I received great inspiration for the layout design of pokémon information for this project from [PokémonDB](https://pokemondb.net/)
- Mel had a slide that showed a person who made a pokedex that inspired me to create one as well


## Small note
I(Wei Chong) have my github somehow connected to my other email (101.21.gohweichong@gmail.com) instead on my school email, thus this github I am using is not from my school account but a normal email. To avoid any screw ups when messing with the visual studio code to connect to my school account, I decided to continue using this account.
 
