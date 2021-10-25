
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
/*Will call this randomphrase as a argument value 
when I call addPhraseToDisplay and use randomPhrase I'm 
switching out arr for randomPhrase value
*/



// Displaying the randmonly selected array phrase
//display characters on page 
const addPhraseToDisplay = arr => {
        for (let i = 0; i < arr.length; i++) {
            const characterList = document.querySelector('#phrase ul');
            const item = document.createElement('li');
           
    
        if (arr[i] === '') {
                arr.className('letter');
            const item = document.createElement('li');
            item.textContent = input.value;
            /*The JavaScript input text property is used to set or return the value of a text input field. */
            input.value = '';
            characterList.append(li);
        }

        if (arr[i] === '') {
            item.classList.add('letter');

        }

        else {
            item.classList.add('space');
    
        }


        /*After conditionals then add to ul */
        characterList.appendChild(item);
    }

}


addPhraseToDisplay();