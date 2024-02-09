const formContainer=document.querySelector('form');
const inputContainer=document.querySelector('input');
const previousGuessElement=document.querySelector('#previous-guesses-list');
const remainingGuesseElement=document.querySelector('#remaining-guesses-count');
const previousGuessList=[];
let remainingGuesses=10;
const targetGuessingNumber=Math.floor(Math.random()*100)+1;
remainingGuesseElement.textContent=remainingGuesses;


formContainer.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();
    const userInputValue=Number(inputContainer.value);
    if(!(userInputValue) || userInputValue<0 || userInputValue>100){
        alert('Enter Number from 1 to 100');
    }
    else{
        remainingGuesses--;
        remainingGuesseElement.textContent=remainingGuesses;
        previousGuessList.push(userInputValue);
        previousGuessElement.textContent=`Previous Guessed Elements ${previousGuessList}`;
        if(targetGuessingNumber==userInputValue){
            alert('Win Win, You Guessed It Right');
            location.reload();
        }
        else{
            inputContainer.value='';
            if(remainingGuesses==0){
                alert(`You Lost, Guessed Number Was ${targetGuessingNumber}`);
                location.reload();            
            }
        }
    }
    
}