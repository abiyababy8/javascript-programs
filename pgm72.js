class Employee {
    //properties
    employeeName;
    employeeId;
    //constructor
    constructor(name, id) {
        this.employeeName = name;
        this.employeeId = id;
    }
    printName() {
        console.log("Employee Name:", this.employeeName);
    }
    printAge(age){
        console.log(age)
    }
    printDetails(){
        console.log(this.age);
        console.log(this.employeeName)
    }
}
//create an object of the class
const employee1=new Employee('John','SR123');
employee1.printName()
employee1.printAge(23)
employee1.printDetails()