
// Globbal Variables
const qwerty = document.getElementById('qwerty');
let missed = 0;
const overlay = document.getElementById('overlay');
const btnReset = document.querySelector('.btn__reset');




//Click event to hides the start game overlay screen on load
btnReset.addEventListener('click', ()=> {
    overlay.style.display = 'none';
});


//Phrases array 
const phrases = ['Apples to Oranges', 'The day is young', "If you are not first you are last", 'Ricky Bobby', "The early bird gets the worm"]

//Function selects an value from the array at random
getRandomPhraseAsArray = (arr) => {
    const randomPhraseNumber = Math.floor(Math.random()*arr.length);
    return arr[randomPhraseNumber].split("");
};

//Variable to access the getRandomPhraseAsArray function
const randomPhrase = getRandomPhraseAsArray(phrases);


// Function displays the randmonly selected array phrase
const addPhraseToDisplay = (arr) => {

        for (let i = 0; i < arr.length; i++) {
            const characterList = document.querySelector('#phrase ul');
            const item = document.createElement('li');


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



//Function checks if user button clicks on a button that matches the random phrase
function checkLetter(button) {
   const letterClass = document.getElementsByClassName('letter');
   let match = null;
 

   for (let i = 0; i < letterClass.length; i++) {
       if ( letterClass[i].textContent.toLowerCase() === button ) {
           letterClass[i].classList.add('show');
           match = letterClass[i].textContent;
       }
  
   };

   return match;
}


//Click event/function removes a heart at the bottom of the screen if user selects wong button
qwerty.addEventListener('click', (e) => {

    const img = document.querySelectorAll('.tries img');


    if (e.target.tagName === 'BUTTON' && !e.target.classList.contains("chosen")) {

        e.target.classList.add('chosen');
   
   
     const selectedButton = checkLetter(e.target.textContent.toLowerCase());

     if (selectedButton) {
         document.getElementsByTagName('button').disabled = true;
     }

     if ( !selectedButton ) {
         missed += 1;
     
 
         for ( let i=0; i < img.length; i++ ) {
 
             if (missed === 1) {
             img[0].src = 'images/lostHeart.png';
                 }
 
              else if (missed === 2) {
                 img[1].src = 'images/lostHeart.png';
 
                 } else if (missed === 3) {
                     img[2].src = 'images/lostHeart.png';
                     
                     }  else if (missed === 4) {
                         img[3].src = 'images/lostHeart.png';
                         
                         } else if (missed === 5) {
                             img[4].src = 'images/lostHeart.png';
                             
                         }
                     }
                 };

            }
                 
                 checkWin()
    });


/*Function shows win overlay if user guesses phrase right and lose overlay if user
does guess phrase correct
*/
const checkWin = () => {
    const letterClassMatch = document.getElementsByClassName('letter');
    const showClassMatch = document.getElementsByClassName("show");
    let messageDisplay = document.querySelector(".title");
  
    if ( letterClassMatch.length === showClassMatch.length ) {
        overlay.className = 'win';
        messageDisplay.innerHTML = "You've won!";
        overlay.style.display = "flex";
    }
  
    if ( missed > 4 ) {
        overlay.className = 'lose';
        messageDisplay.innerHTML = "You lost!";
        overlay.style.display = "flex";
    }
 }
 




   
