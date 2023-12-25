class School {
    name:string;
  
    students:Student[]=[];
    teachers:Teacher[]=[];
    
    
    addStudent(stdObj:Student){
      this.students.push(stdObj)
    }
  
    addTeacher(techObj:Teacher){
      this.teachers.push(techObj)
    }
  
    constructor(name:string){
      this.name=name;
    }
  }
  
  class Student{
    name:string;
    age:number;
    schoolName:string;
  
    constructor(name:string,age:number,schoolName:string){
      this.name=name;
      this.age=age;
      this.schoolName=schoolName;
    }
  }
  class Teacher extends Student{
    
  }
  
  let School1 = new School("Vision")
  let School2 = new School("Charter")
  
  let s1 = new Student("Sufyan",25, School1.name)
  let s2 = new Student("Hanzala",22, School2.name)
  let s3 = new Student("Aimman",21, School2.name)
  let t1 = new Teacher("Sarwar",42, School1.name)
  let t2 = new Teacher("Sheeza",29, School2.name)
  let t3 = new Teacher("Chaman",40, School2.name)
  
  
  //add student
  School1.addStudent(s1)
  School2.addStudent(s2)
  School2.addStudent(s3)
  
  //add teacher
  School1.addTeacher(t1)
  School2.addTeacher(t2)
  School2.addTeacher(t3)
  
  
  
  // console.log(t1)
  // console.log(t2)
  // console.log(t3)
   console.log(School1);
   console.log(School2);