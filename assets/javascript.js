// Query selectors for answer choices
let answerChoice1 = document.getElementById("answer1");

// score keeper we can start at 0
// let score = 0
// save score display until the end


//======= timer
// Make a timer
// make a button that  starts the timer
// display the timer (we need to find a spot for it in our html)
// how do I know how long the timer starts with

// I need a variable for my timer
// let timer = 40
// set interval setInterval 1000 
// remember the activity for colorsplosion



// ====== ending 
// something that happens at the end
// display that the game is over 
// with a highscore counter





// when the quiz is done reset the timer 



// that button also starts the quiz by showing the first question and answer




// Make an eventListener

// console.log(answerChoice1)

answerChoice1.addEventListener("click", function(event){

if(event.target.textContent === "Red"){
    console.log("correct")
    //notify the user if their answer choice was correct on the page
    // after they answer hide choices and question
    // display new question and choices
    // score variable needs to go up by 1

} else{
    console.log(event.target.textContent)
    //notify if they chose wrong
    // after they answer hide choices and question
    // display new question and choices

}
});

