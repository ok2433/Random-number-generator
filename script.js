const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * ( maxNum - minNum + 1));

let attempts = 0 ; //to keep track of the no. of attempts
let guess;
let running = true; //to make the game run and close it 

while (running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess); //without this , the output we get is string so  we use this to convert it number
    // console.log(typeof guess, guess); 


    running = false; //it makes sure to close the game or program 
}