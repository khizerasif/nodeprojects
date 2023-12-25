import inquirer from "inquirer";

class Student {
  name:string
  constructor(n:string){
    this.name=n
  }
}

class Person {
  students:Student[]=[]

  addStudent(obj: Student){
    this.students.push(obj)
  }
}

const persons = new Person()


const programStart = async(persons:Person)=>{
  do{

    console.log("welcome guest");
  
  const ans = await inquirer.prompt({
    type:"list",
    message:"What are you looking for?",
    name:"select",
    choices: ["Self","Students"],
  })

  if(ans.select == "Self"){
    console.log("I want to talk myself");
    console.log("I love myself");
  }
  if(ans.select == "Students"){
    const ans = await inquirer.prompt({
      type:"input",
      message:"Who like to talk to you, which student",
      name:"student",
    });

    const student = persons.students.find(val => val.name == ans.student)
    if(!student){
      const name = new Student(ans.student)
      persons.addStudent(name);

      console.log(`Hello I am ${name.name}, or I'm fine`)
      console.log(persons.students);
    }
    if(student){
      console.log(`Hello I am ${student.name}, or I'm fine............. I'm object student`)
      console.log(persons.students);
    }

  }

  }while(true)

};

programStart(persons)