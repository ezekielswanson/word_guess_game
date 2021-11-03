
//Variables
const qwerty = document.getElementById('qwerty');
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
/*If this person is not zeke do this
for 2 options
*/
const addPhraseToDisplay = (arr) => {

        for (let i = 0; i < arr.length; i++) {
            const characterList = document.querySelector('#phrase ul');
            const item = document.createElement('li');



        //Space b/w quatation marks rep a space 
        //if you want actual word 
        if (arr[i] !== ' ') {

            item.classList.add('letter');
            item.textContent = arr[i];    
        }



        if (arr[i] === ' ') {
            item.classList.add('space');
        }

        characterList.appendChild(item);
        
    }

}


addPhraseToDisplay(randomPhrase);
ok


// Creating checkLetter function
 
const checkLetter = (button) => {
   const letterClass = document.getElementByClassName('letter');
   letterMatch = null;
 
   //Are we looping through the letterClass list?
   for (let i = 0; i < letterClass.length; i++) {

       if ( letterClass[i].textContent === button.textContent ) {
           letterClass.classList.add('show');
           const match = letterClass;
           return match;
       }

       else {
           return null;
       }
    
   };
}

//What argument do I pass to this function? or do we pass anything to it?
//We're not passing an argument into this function because letterClass 
//using the data from the array




//Creating event listner 
//Using e because we want target the button elemenet only 

qwerty.addEventListener('click', (e) => {

    if (e.target.tagName === 'button') {
        //Where does button come into play on the method?
        e.taget.tagName.classList.add('chosen');
    }

    const selectedButton = checkLetter();

    if ( selectedButton !== 'button' ) {
        document.getElementsByTagName('img').remove();
        missed += 1;
    }

});

//Why doesn't this have a parameter?
const checkWin = () => {
    const letterClassMatch = 'letter';
    const showClassMatch = 'show';

    if ( letterClassMatch === showClassMatch ) {
        overlay.className.add('win');
        //change this 
        document.getElementByClassName("title").innerHTML = "You won!";
        overlay.style.display = "flex";
    }

    if ( missed > 4 ) {
        overlay.className.add('lose');
        document.getElementByClassName("title").innerHTML = "You lost!";
      overlay.style.display = "flex";

    }

}





