#!/usr/bin/env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";
const createuser = () => {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(10000000 * Math.random() * 90000000),
            balance: 10000 * i
        };
        users.push(user);
    }
    return users;
};
const atmmachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "Enter pin code",
        name: "pin",
    });
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(chalk.blue.bold(`Welcome ${user.name}`));
        atmfunction(user);
    }
    else {
        console.log(chalk.redBright("Invalid pin"));
    }
};
const atmfunction = async (users) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "Select",
        message: "What would you like to do?",
        choices: ["Withdraw", "BalanceInquiry", "Exit"]
    });
    if (ans.select == "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter amount",
            name: "cash"
        });
        if (amount.cash > users.balance) {
            console.log(chalk.redBright("You don't have enough"));
        }
        console.log(`Withdraw amount:${amount.cash}`);
        console.log(`New Balance: ${users.balance - amount.cash}`);
    }
    if (ans.Select == "BalanceInquiry") {
        console.log(`Your Balance is :${users.balance}`);
    }
    if (ans.Select == "Exit") {
        console.log(chalk.italic.yellowBright("Thank You for using Atm"));
    }
};
const user = createuser();
atmmachine(user);
