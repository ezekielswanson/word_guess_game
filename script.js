/* 
1. Create array of phrases

2. function grab phrase at random

3. function display phrase at random

*/

//Variables
const randomLetter = getElementById('qwerty');
const randomPhrase = getElementById('phrase');
const missed = 0;
const overlay = getElementById('overlay');
//Can I put the overlay var inside of the event listner?

//Creating event listner to hide start game overlay screen
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    //what do I name my return?
});


//Phrases array 
const phrases = ['Apple', 'Orange', 'Kiwi', 'Almond', 'Garlic']