#!user/bin/env node
import {dvd, mul, sub, sum} from "./functions.js"
import inquirer from "inquirer"
import chalk from 'chalk'
import chalkanimation from 'chalk-animation'

const timer = ()=>{
    return new Promise((res)=>{
        setTimeout(res,4000)
    })
}
async function bonjour() {
    let title = chalkanimation.neon("Let's Start Calculation")
    await timer();
    title.stop();
    console.log(`
 _____________________
|  _________________  |
| |              0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`)
}

bonjour();


async function ask() {
    const answers = await inquirer.prompt([
        {
            type :"list",
            name:"operation",
            message:"Which operation do you want to preform? \n",
            choices: ["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type:"number",
            name:"num1",
            message:chalk.blueBright("Enter number 1")
        },
        {
            type:"number",
            name:"num2",
            message:chalk.blueBright("Enter number 2")
            
        }
    ])
    let result 
    
    if
      (answers.operation == "Addition")
    {
        result =sum(answers.num1,answers.num2)
        console.log(chalk.bold(`${answers.num1}+${answers.num2}=${result}`))

        // console.log(chalk.bold.yellow(result))
    }
    else if(answers.operation == "Subtraction")
    {
         result =sub(answers.num1,answers.num2)
         console.log(chalk.bold(`${answers.num1}-${answers.num2}=${result}`))

    //      console.log(chalk.bold.yellowBright(result))
    }
    else if (answers.operation == "Multiplication")
    {
        result =mul(answers.num1,answers.num2)
        console.log(chalk.bold(`${answers.num1}*${answers.num2}=${result}`))

        // console.log(chalk.bold.yellowBright(result))
    }
    else if (answers.operation == "Division")
    {
        result =dvd(answers.num1,answers.num2)
        console.log(chalk.bold(`${answers.num1}/${answers.num2}=${result}`))

        // console.log(chalk.bold.yellowBright(result))
    }
    else {
        console.log("Invalid Operation")
    }
}   
    async function startloop(){
        let again
        do{
            await ask()
               again = await inquirer.prompt([{
                      type : "list",
                      name:"restart",
                      choices:["Yes","No"],
                      message:"Do you want to start again"
    
        }])
        }while(again.restart== "Yes")
    }
    
    startloop();

// async function startagain() {
//     do{
//         await ask()
//        var again = await inquirer.prompt([{
//             type :"input",
//             name : "restart",
//             message: "Do you want to restart?Press Y for Yes and N for No"
//         }])
//     }while(again.restart == "Y" || again.restart == "y" || again.restart == "YES"|| again.restart == "Yes"||again.restart == "yes")
    
// }
// startagain()
