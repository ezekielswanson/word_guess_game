
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
const phrases = ['Apples to Oranges', 'The day is young', "If you're not first you're last", 'Ricky Bobby', "The early bird get's the worm"]

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
/*Will call this randomphrase as a argument 
when I call addPhraseToDisplay and use randomPhrase I'm 
switching out arr for randomPhrase value
*/



// Displaying the randmonly selected array phrase
//display characters on page 
const addPhraseToDisplay = (arr) => {

        for (let i = 0; i < arr.length; i++) {
            const characterList = document.querySelector('#phrase ul');
            const item = document.createElement('li');

    
        if (arr[i] === '') {
            item.className = 'letter';
     
        }

        if (arr[i] === '') {
            item.className = 'letter';

        }

        else {
            item.className = 'space';
        }


        /*After conditionals run append classe name add to ul */
        characterList.appendChild(item);
    }

}

addPhraseToDisplay(randomPhrase);





// Creating checkLetter function
 
const checkLetter = (button) => {
   const letterClass = document.getElementByClassName('.letter');
   letterMatch = null;
 
   for (let i = 0; i < letter.length; i++) {
       if (letterClass[i] === button ) {
            letterClass.className = 'show';
            const matchedLetter = '';
            return matchedLetter;
       }

       else {
           return letterMatch;
       }
 
 
   }
};

//Creating event listner 
//Using e because we want target the button elemenet only 

randomLetter.addEventListener('click',(e)=> {
    if (e.target.tagName === 'button') {
            e.target.tagName = 'chosen';
            const selectedButton = checkLetter();
    }
    
    else {
        //Do I declare the var outside of the if then statement?
        removeHeartImage = getElementByClassName('.tries');
        removeHeartImage.remove();
        const missed = '';

    }


});


