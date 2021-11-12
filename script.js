
//Variables
const qwerty = document.getElementById('qwerty');
let missed = 0;
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



// Creating checkLetter function
 
function checkLetter(button) {
   const letterClass = document.getElementsByClassName('letter');
   letterMatch = null;
 
   //Are we looping through the letterClass list?
   for (let i = 0; i < letterClass.length; i++) {
       if ( letterClass[i].textContent === button ) {
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

    //Ref class name and tag name  b/c it's more specific 
    const img = document.querySelectorAll('.tries img');
    //set var before if statements 
    //b/c it only runs spec code for the if statements 

    //Using button b/c tagName proper is uppercase
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        
    }


    const selectedButton = checkLetter();

    //save the hearts w/in a loop
    /* anytime you have mulitples of something do an array node list 
    make var and loop through it 
    querySelector all gets list and tech makes it an array
    ex: li use arrays or node lists
    to delete one at a time instead of the whole list
    */

    /*
    if you only need use var inside of this condit 
    use theim in the function
    if you need them

    */

    for ( let i=0; i < img.length; i++ ) {
        if ( selectedButton !== 'BUTTON' ) {

            if (missed === 1) {
            img[0].src = 'images/lostHeart.png';

            } else if (missed === 2) {
                img[1].src = 'images/lostHeart.png';

                } else if (missed === 3) {
                    img[2].src = 'images/lostHeart.png';
                    
                    }  else if (missed === 4) {
                        img[3].src = 'images/lostHeart.png';
                        
                        } else if (missed === 5) {
                            img[4].src = 'images/lostHeart.png';
                            
                            }
                 }

    }
    missed += 1;


});

//Why doesn't this have a parameter
const checkWin = () => {
    const letterClassMatch = 'letter';
    const showClassMatch = 'show';

    if ( letterClassMatch.length === showClassMatch.length ) {
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





