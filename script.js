// Write a function called getComputerChoice 
// A function to get playerSelection

//Funtion that plays a single round of rock, paper , scissors
// - This function should take two parameters which are the selections for both palyers
// - Declare the winner

//Write a final game loop with a counter to keep score


    let playerCount = 0
    let computerCount = 0
    let roundWinner = '' 

const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    let selectRandom = choices[Math.floor(Math.random() * choices.length)]

    return selectRandom
}

const updateScoreMessage = (roundWinner , computerChoice , playerChoice) => {
    if(roundWinner === 'tie'){
        console.log("It's a tie!");
    }
    if(roundWinner ===  'player'){
        console.log("You win! " + capitalizeFirstLetter(playerChoice) + " beats " + capitalizeFirstLetter(computerChoice));
    }else if (roundWinner === 'computer') { 
        console.log("You lose. " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(playerChoice));
    }

    console.log("Player Count: " + playerCount  + "    Computer Count: "+ computerCount);
}


const playRound = (computerChoice, playerChoice) => {
    console.log("Player Choice: " + capitalizeFirstLetter(playerChoice) + "    Computer Choice: " + capitalizeFirstLetter(computerChoice));
   if(computerChoice == playerChoice){
    roundWinner = 'tie'
   }
   if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
    (playerChoice == 'scissors' && computerChoice == 'paper') ||
    (playerChoice == 'paper' && computerChoice == 'rock')){
        playerCount++;
        roundWinner = 'player'
    }

    if((computerChoice == 'rock' && playerChoice== 'scissors') ||
    (computerChoice == 'scissors' && playerChoice == 'paper') ||
    (computerChoice == 'paper' && playerChoice == 'rock')){
        computerCount++;
        roundWinner= 'computer'
    }
    
    updateScoreMessage(roundWinner,computerChoice,playerChoice)
}

// Helper Functions

const capitalizeFirstLetter =  (s) => {
    let str = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
    return str;
}

const isGameOver = (playerCount, computerCount) => {
    if(playerCount === 5 || computerCount === 5){
        return true
    }else{
        return false
    }
}




console.log();

const game = () => {    
    while(!isGameOver(playerCount,computerCount)){
        let playerChoice = prompt("Select Rock , Paper or Scissors.").toLowerCase()
        let computerChoice = getComputerChoice()
        playRound(computerChoice, playerChoice)
    }

    if(playerCount === 5 ){
        console.log(' CONGRATULATIONS. You WIN.');
    }else{
        console.log('You LOST. Better luck next time');
    }

    let playAgain = prompt("Would you like to play again? Type y or n").toLowerCase()

    if(playAgain == 'y'){
        playerCount = 0;
        computerCount= 0 
        roundWinner = ''
        game()
    } else{
        console.log("Thank you for playing.");
        return
    }
}

game()

