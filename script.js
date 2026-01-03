// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// let attempts = 0; //to keep track of the no. of attempts
// let guess;
// let running = true; //to make the game run and close it

// while (running) {
//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess); //without this , the output we get is string so  we use this to convert it number
//   // console.log(typeof guess, guess);

//   if (isNaN(guess)) {
//     // this inNaN checks if the no. (i.e. guess is a no. or not)
//     window.alert("Please enter a valid number");
//   } else if (guess < minNum || guess > maxNum) {
//     //checks for the entered number to be in range or not
//     window.alert("Please enter a valid number");
//   } else {
//     attempts++; //increase the attempts chance to guess the no.
//     if (guess < answer) {
//       window.alert("Entered value is too low , try again !");
//     } else if (guess > answer) {
//       window.alert("Entered value is too high, try again !");
//     } else {
//       window.alert(`Congrats you guessed the answer in ${attempts} attempts`);
//       running = false; //it makes sure to close the game or program
//     }
//   }
// }

let minnumber;
let maxnumber;
let guess;
let running = true;
let attempts = 0;

function submitmin() {
  let inputmin = document.getElementById("minval");
  if (inputmin.value === "") {
    console.log("Input is empty");
  } else {
    console.log("Input has value:", inputmin.value);
  }
  minnumber = Number(inputmin.value);
}

function submitmax() {
  let inputmax = document.getElementById("maxval");
  if (inputmax.value === "") {
    console.log("Input is empty");
  } else {
    console.log("Input has value:", inputmax.value);
  }
  maxnumber = Number(inputmax.value);
}

function play() {
  if (minnumber === undefined || maxnumber === undefined) {
    alert("Please Enter Valid Max and Min number");
    return;
  }

  random = Math.floor(Math.random() * (maxnumber - minnumber + 1)) + minnumber;
  console.log("Random number: ", random);

  document.getElementById("userguess").style.display = "block";
}







function submit() {
  let guessinput = document.getElementById("guessnum");

  let guess = Number(guessinput.value);

  if (guessinput.value === "" || isNaN(guess)) {
    document.getElementById("numcorrect").textContent =
      "Please Enter a Valid Number";
    return;
  } 
  
  if (guess < minnumber || guess > maxnumber) {
    document.getElementById("numcorrect").textContent =
      "Please enter the number within given max and min number";
  }

  attempts++;
  document.getElementById("attemptno").textContent = `Total Attempts = ${attempts}`


  if (guess === random) {
    document.getElementById("numcorrect").textContent =
      "You Guessed the correct number :" + guess;
  } else if (guess < random) {
    document.getElementById("numcorrect").textContent =
      "Entered Value is too low ";
  } else   {
    document.getElementById("numcorrect").textContent =
      "Entered Value is too high";
  }
}
