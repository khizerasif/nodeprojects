import inquirer from "inquirer";
const counter = (para) => para.replace(/\s/g, "").length;
async function wordcounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Enter Text to check it's lenght",
            name: "counter"
        });
        console.log(counter(res.counter));
    } while (true);
}
wordcounter(counter);
