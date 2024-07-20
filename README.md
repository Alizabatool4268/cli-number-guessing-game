# cli-number-guessing-game
This is a command line-based number guessing game in which you will have to guess a random number between 0 to 15
It is extremly fun to play and this game gives you five attempts to guess the random number.

## pakages 
to create this game I utilized
- Inquirer// command to install (npm install inquirer)
- Chalk  // command to install ( npm install chalk)

## code flow 

- First the variable randomnum generates a random number usning Math.floor and Math.random and muiltiplied it by 15 such that this variable can generate a random number.
- I further created two variables maximunattempts which is 5 and attenpt = 1 // this is the current attempt.
- Then I imported both inquirer and chalk.
- I then created a while loop and set the condition that the loop should only run 5 times which is the number of attempts I 
  want to provide to the player.
- I then used inquirer to ask the question from my player.
- I used the if,if-else and else statements to manipulate the flow of my game.
- If the random number would be smaller then the players guess (your guess is to high) would be printed.
- If the random number would be greater then the players guess (your guess is to low) would be printed .
- If both the random number and the player guess would be equal then the player would win and the message would be printed
- If the user puts any invalid value (please enter a valid number would be printed to the console.
- If player uses all the attempts (you have used all the attempts. YOU LOSE) will print to the console.
- The else statment tells us which attepmt are we currently on.
- Then the loop post increments and the loop runs five times until the player guesses the correct number if the plyer guess the correct number the player wins and the loop breaks if the player can not guess the correct number with in five attempt he or she will lose.
