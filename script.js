
//Variables
const randomLetter = document.querySelectorAll('qwerty');
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
getRandomPhraseAsArray = (arr) => {
    const randomPhraseNumber = Math.floor(Math.random()*arr.length);
    return arr[randomPhraseNumber].split("");
};

//Create a variable to access the getRandomPhraseAsArray function
/*The getRandomPhraseAsArray function is already getting the random split 
character and you're passing the phrases as an arugment(value) into that function
*/
const randomPhrase = getRandomPhraseAsArray(phrases);


// Displaying the randmonly selected array phrase
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++); {
        const characterList = document.querySelector('ul');
        const item = document.createElement('li');
        item.textContent = input.value;
        /*The JavaScript input text property is used to set or return the value of a text input field. */
        input.value = '';
        characterList.append(li);

    if (phrase[i] === '') {
        li.className('letter');
        }

        else {
            li.className('space');
        }
        return addPhrasetoDisplay(phraseArray);
    }

};


// Creating checkLetter function 

  const checkLetter = (button) => {
    const checkLetter = docuemnt.querySelectorAll('li.letters');
    letterMatch = null;

    for (let i = 0; i < letters.length; i++) {

    }


};
