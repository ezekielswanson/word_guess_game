
//Variables
const randomLetter = document.querySelectorAll('qwerty');
const randomPhrase = document.querySelector('phrase');
const missed = 0;
const overlay = document.getElementById('overlay');
const btnReset = document.querySelector('.btn__reset');
//Can I put the overlay var inside of the event listner?

//Creating event listner to hide start game overlay screen
btnReset.addEventListener('click', ()=> {
    overlay.style.display = 'none';
});



//Phrases array 
const phrases = ['Apple', 'Orange', 'Kiwi', 'Almond', 'Garlic']

//Creating a function to select an val from array at random
getRandomPhraseAsArray = () => {
    const randomPhraseNumber = Math.floor(Math.random()*arr.length);
    return phrases[randomPhraseNumber].split("");
};



// Displaying the randmonly selected array phrase
addPhraseToDisplay = () => {
    //1. for each character in the array, you’ll create a list item,
    //2. append that list item to the #phrase ul
    //3. If the character in the array is a letter and not a space, 
    //the function should add the class “letter” to the list item.

    const phraseArray = addPhraseToDisplay();
    const ul = document.querySelectorAll('#phrase ul');

    for (let i = 0; i < phrases.length; i++); {
            let li = document.createElement('li');
        

        if (randomPhrase === 'phrases') {
            li.appendChild('')

    
    }





};