#!/usr/bin/env node

// Importing inquirer and chalk
import inquirer  from "inquirer";
import chalk from "chalk";

// Printing a Welcome msg
let line = chalk.gray('=' .repeat(51));
let wcMsg = `\n\t${line}\n${chalk.bold.blue("\tWelcome to Abdul Saboor - Words Counter Application\n")}\t${line}\n`;
console.log(wcMsg);

// Process of prompting the user for input
let input = await inquirer.prompt([
    {
        name: "sentnces",
        type:"input",
        message: (chalk.yellow("Enter or Copy-Paste the Words you want to know the number of:")),
    }
]);

// Using the trim func. and split func. to split the sentences into words based on "spaces" and saving it into an array
let words = input.sentnces.trim().split(/\s+/);

// Process of putting the user input into an array
console.log (chalk.cyan("\nHere are the words of your input:\n"));
console.log (words);

// Giving the user the word count
console.log(chalk.cyan(`\nHere is your word count: ${chalk.green(words.length)}\n`));