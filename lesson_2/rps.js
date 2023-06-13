const readline = require('readline-sync');
<<<<<<< HEAD
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
=======
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
>>>>>>> development

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
<<<<<<< HEAD

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
=======
  if ((choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'paper' && computerChoice === 'rock')
  ) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'lizard') ||
  (computerChoice === 'lizard' && choice === 'spock') ||
  (computerChoice === 'rock' && choice === 'scissors') ||
  (computerChoice === 'lizard' && choice === 'paper') ||
  (computerChoice === 'spock' && choice === 'scissors') ||
  (computerChoice === 'spock' && choice === 'rock') ||
  (computerChoice === 'scissors' && choice === 'lizard') ||
  (computerChoice === 'scissors' && choice === 'paper') ||
  (computerChoice === 'paper' && choice === 'spock') ||
  (computerChoice === 'paper' && choice === 'rock')
) {
>>>>>>> development
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}