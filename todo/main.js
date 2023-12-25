#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
let todo = ["saim", "warsi"];
async function createtodo(arr) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select an Operation",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.list == "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add items",
                name: "item"
            });
            arr.push(addtodo.item);
            console.log(chalk.blueBright(arr));
        }
        else if (ans.list == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "Select item for update",
                name: "todo",
                choices: arr.map(item => item)
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add items",
                name: "item"
            });
            let newtodo = arr.filter(val => val !== updatetodo.todo);
            arr = [...newtodo, addtodo.item];
            console.log(arr);
        }
        else if (ans.list == "view") {
            console.log(arr);
        }
        if (ans.list == "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                message: "Select item for update",
                name: "todo",
                choices: arr.map(item => item)
            });
            let newtodo = arr.filter(val => val !== deletetodo.todo);
            arr = [...newtodo];
            console.log(arr);
        }
    } while (true);
}
createtodo(todo);
