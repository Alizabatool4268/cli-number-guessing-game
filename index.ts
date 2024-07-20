#! /usr/bin/env node

let randomnum = Math.floor(Math.random() * 15);
let maxAttempts = 5;
let attempt = 1;

import inquirer from "inquirer";
import chalk from "chalk";
while (attempt <= maxAttempts) {
  const currentGuess = await inquirer.prompt([
    {
      message:chalk.cyan("Lets see how good you are at guessing numbers\n  Enter your guess under 0 to 15 ?"),
      type: "number",
      name: "guess",
    },
  ]);
  if (randomnum < currentGuess.guess) {
    console.log(chalk.bgYellow("Your guess is to high"));
  } else if (randomnum > currentGuess.guess) {
    console.log(chalk.bgBlue("your guess is to low"));
  } else if (randomnum === currentGuess.guess) {
    console.log(chalk.bgGreen("YOU WON ! you guessed the correct number"));
    break;
  } else {
    console.log("kindly enter a valid number");
  }
  if (attempt === 5 ){
    console.log(chalk.red("you have used all the attempts. YOU LOSE"))
  }
   else{console.log(chalk.bgGrey(`THIS IS YOUR ATTEMPT ${attempt}`))};
  attempt++;
};


