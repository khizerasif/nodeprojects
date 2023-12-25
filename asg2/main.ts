#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"
import chalkanimation from "chalk-animation"


console.log("NUMBER GUESSING GAME")

let score= 0;
 async function startloop(){
       let again
       do{
            await guessnumber()
              again = await inquirer.prompt([{
                     type : "list",
                     name:"restart",
                     choices:["Yes","No"],
                     message:"Do you want to start again"

       }])
       }while(again.restart== "Yes")
 }

startloop();

async function guessnumber() {
      let guessnum = Math.floor(Math.random()*10)
      let hint
      if(guessnum%2==0){
            console.log("Hint : The Number is even")
      }
      else{        
              console.log("Hint : The Number is odd")
        }
        const answer = await inquirer.prompt([
            {
                  type:"number",
                  name:"userguess",
                  message:`Guess a number between 1 to 10(${hint})`

            }
        ])
        console.log(`your Guess Number is ${answer.userguess} and system generated number is ${guessnum}`)
        if(answer.userguess == guessnum){
            score++;
            console.log(chalk.blueBright(`Congratulation! Your answer is correct. Your score is :${score}`))
        }
      else {
            console.log(chalk.redBright(`Ohh! you guessed the wrong number.Your score is :${score}`))
      }
}
