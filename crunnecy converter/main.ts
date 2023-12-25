import inquirer from "inquirer";

let conversion={
"PKR":{
    "USD": 0.0044,
    "GBP": 0.0037,
    "PKR": 1
},
"GBP":{
    "USD": 1.21,
    "PKR": 271.79,
    "GBP": 1
},
"USD":{
    "PKR": 225.50,
    "GBP": 0.83,
    "USD": 1
},
}
const answer:{
    from:"PKR" | "USD" | "GBP"
    to:"PKR" | "USD" | "GBP"
    amount:number, 
    //inquirer using    `   
}=await inquirer.prompt([
    {
        type:"list",
        name:"from", 
        choices:["PKR","USD","GBP"],
        message:"select your currency"
},  
    {
        type:"list",
        name:"to",
        choices:["USD","GBP","PKR"],
        message:"select your conversion currency"
    },
    {
        type:"number",
        name:"amount",
        message:"enter your conversion amount"
    },
])
const {from , to , amount} = answer;  
if (from && to && amount) {    
let result = conversion[from][to] * amount
console.log(`your conversion from ${from} to ${to} is ${result}`)}
else {
    console.log("invalid inputs")}
