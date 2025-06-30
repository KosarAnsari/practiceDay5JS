class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello , my name is ${this.name} and i am ${this.age} years old.`);
    }
}

let p1 = new person("Sarah","18");
p1.greet();

class student extends person{
    constructor(name,age , grade){
        super(name,age);
     this.grade = grade;
    }

    greet(){
        console.log(`Hello my name is ${this.name} , i am ${this.age} years old and i am studying in grade ${this.grade}.`);
    }
}
 let s1 = new student("Sarah","18","10th");
 s1.greet();

 class rectangle{
    constructor(width,height){
    this.width= width;
    this.height= height;
    }

    area(){
        return (this.width * this.height);
    }
        

    perimeter(){
        return 2*(this.width + this.height);
        
    }
 }
let rect1 = new rectangle(3,4);
let area = rect1.area();
let perimeter = rect1.perimeter();

console.log("area of rect1 =",area,"Perimeter of rect1 =",perimeter);


function divide(a,b){
    if(b===0){
    throw new Error("can not be divided by error");
   }
    return a/b;
}
try{
    let result = divide(10,0);
    console.log("Result",result);
}catch(err){
    console.log(err);
}


class BankAccount{
    constructor(owner,balance){
    this.ownerName = owner;
    this.balance=balance;
    }

    deposit(amount){
        this.balance +=amount;
        console.log(`Rs.${amount} deposited.New Balance ${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            throw new Error("Insufficient Funds.")
        }
        this.balance -= amount;
        console.log(`Rs.${amount}withdrawn.New Balance ${this.balance}`);
    }
}

let account1 = new BankAccount("John",2000);

try{
    account1.withdraw(3000);
}catch(err){
    console.log(err);
}

class Car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        console.log(`Details of the car = "Brand": ${this.brand}, "Model":${this.model}, "Year:${this.year}`);
    }
}

let car1 = new Car("Toyota","Camry",2020);
car1.getDetails();

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        
        return Math.PI*this.radius*this.radius ;
    }

    circumference(){
        return 2*Math.PI*this.radius;
    }
}

let circle1 = new Circle(2);

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary=salary;
    }

    displayInfo(){
        console.log(`${this.name} has salary of ${this.salary} Rupees.`);
    }
}
let emp1 = new Employee("Ramesh",25000);
emp1.displayInfo();

class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department = department;
    }

    displayInfo(){
        console.log(`${this.name} earns ${this.salary} and works in ${this.department} department.`);
    }
}

class Animal{
    speak(){
        console.log("Animal Speaks.");
    }
}
 class Dog extends Animal{
    speak(){
        console.log("Dog Barks");
    }
 }

 class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
 }


function parseJSON(str){
    try{
        let result = JSON.parse(str);
        console.log("Parsed Result :",result);
    }catch(err){
        console.log("INVALID JSON");
    }
 }

 parseJSON('{"name":"kosar","age":"23"}');
 parseJSON('{name:kosar,age:24}');

 function getAge(person){
    if(typeof person !== "object" || person === null || !("age" in person)){
        throw new Error("Invalid Person Object");
    }
    return person.age;

 }

 try{
    console.log(getAge({name : "Ayesha", age : 25}));
 }catch(err){
    console.log(err);
 }

 try{
    console.log(getAge({name : "Kosar"}));
 }catch (err){
    console.log(err);
 }

 try{
    console.log(getAge("abcd"));
 }catch(err){
    console.log(err);
 }