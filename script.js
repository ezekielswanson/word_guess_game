/* 
1. Create array of phrases

2. function grab phrase at random

3. function display phrase at random

*/

//Variables
const randomLetter = document.getElementById('qwerty');
const randomPhrase = document.getElementById('phrase');
const missed = 0;
const overlay = document.getElementById('overlay');
const btnReset = document.querySelector('.btn__reset');
//Can I put the overlay var inside of the event listner?

//Creating event listner to hide start game overlay screen
btnReset.addEventListener('click', ()=> {
    overlay.style.display = 'none';
    //what do I name my return?
});

console.log('This code is working');


//Phrases array 
const phrases = ['Apple', 'Orange', 'Kiwi', 'Almond', 'Garlic']

