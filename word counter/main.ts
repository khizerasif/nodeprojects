import inquirer from "inquirer";
const counter=(para:string)=> para.replace(/\s/g,"").length
async function wordcounter(counter:(text:string)=>number){
    do{
    let res= await inquirer.prompt({
            type:"input",
            message:"Enter Text to check it's lenght",
            name:"counter"

        })
        console.log(counter(res.counter))
    }while(true)
}
wordcounter(counter)    