#! user/bin/nev

import inquirer from "inquirer";

const answer : {

    sentence : string

} =await inquirer .prompt(
    [
        {
            name : "sentence",
            type : "input",
            message : "Enter your sentance to count the word:"
        }
    ]
)

const words = answer.sentence.trim().split("")

console.log (words)

console.log (`Your sentence word count is ${words.length}`);