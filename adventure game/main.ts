import inquirer from 'inquirer' 
import chalk from 'chalk' 

class Player{
    name:string
    fuel:number = 100
    constructor(name:string){
      this.name=name
    }
    fuelDecrease(){
      let fuel = this.fuel - 25
      this.fuel = fuel
    }
    fuelIncrease(){
      this.fuel = 100
    }
  }
  class Opponent{
    name:string
    fuel:number = 100
    constructor(name:string){
      this.name=name
    }
    fuelDecrease(){
      let fuel = this.fuel - 25
      this.fuel = fuel
    }
    

  }

  let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter your Name:"
  })

  let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select Your Opponent",
    choices:["Skeleton","Assassin","Zombie"]
  })


  let p1 = new Player(player.name)
  let o1 = new Opponent(opponent.select)
  
  do
  {

//  Assassin
  
    if (opponent.select == "Skeleton"){
    
    let ask = await inquirer.prompt({
      type:"list",
      name:"option",
      message:"Select Your Opponent",
      choices:["Attack","Drink Portion","Run For Your Life..."]
    });
    if(ask.option == "Attack"){
      let number = Math.floor(Math.random() * 2)
      if(number > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`))
        if(p1.fuel <= 0){
          console.log(chalk.red.bold.italic("You Loose Better Luck Next time"))
          process.exit()
        }
        
      }
      if(number <=0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`))
        if(o1.fuel <= 0){
          console.log(chalk.green.bold.italic("You win"))
          process.exit()
        } 
      }
    }
    if(ask.option == "Drink Portion"){
      p1.fuelIncrease()
      console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.option == "Run For Your Life..."){
      console.log(chalk.red.bold.italic("You Loose Better Luck Next time"));
      process.exit()
    }
    
  
  }

//  Assassin

  if (opponent.select == "Assassin"){
    
    let ask = await inquirer.prompt({
      type:"list",
      name:"option",
      message:"Select Your Opponent",
      choices:["Attack","Drink Portion","Run For Your Life..."]
    });
    if(ask.option == "Attack"){
      let number = Math.floor(Math.random() * 2)
      if(number > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`))
        if(p1.fuel <= 0){
          console.log(chalk.red.bold.italic("You Loose Better Luck Next time"))
          process.exit()
        }
        
      }
      if(number <=0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`))
        if(o1.fuel <= 0){
          console.log(chalk.green.bold.italic("You win"))
          process.exit()
        } 
      }
    }
    if(ask.option == "Drink Portion"){
      p1.fuelIncrease()
      console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if(ask.option == "Run For Your Life..."){
      console.log(chalk.red.bold.italic("You Loose Better Luck Next time"));
      process.exit()
    }
    
  
  }

// Zombie
if (opponent.select == "Zombie"){
    
  let ask = await inquirer.prompt({
    type:"list",
    name:"option",
    message:"Select Your Opponent",
    choices:["Attack","Drink Portion","Run For Your Life..."]
  });
  if(ask.option == "Attack"){
    let number = Math.floor(Math.random() * 2)
    if(number > 0){
      p1.fuelDecrease()
      console.log(chalk.bold.red(`${p1.name} fuel = ${p1.fuel}`))
      console.log(chalk.bold.green(`${o1.name} fuel = ${o1.fuel}`))
      if(p1.fuel <= 0){
        console.log(chalk.red.bold.italic("You Loose Better Luck Next time"))
        process.exit()
      }
      
    }
    if(number <=0){
      o1.fuelDecrease()
      console.log(chalk.bold.red(`${o1.name} fuel = ${o1.fuel}`))
      console.log(chalk.bold.green(`${p1.name} fuel = ${p1.fuel}`))
      if(o1.fuel <= 0){
        console.log(chalk.green.bold.italic("You win"))
        process.exit()
      } 
    }
  }
  if(ask.option == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
  }
  if(ask.option == "Run For Your Life..."){
    console.log(chalk.red.bold.italic("You Loose Better Luck Next time"));
    process.exit()
  }
  

}  

}
  while(true)