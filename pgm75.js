class Employee{
    empName;
    empId;
    constructor(name,id){
        this.empName=name;
        this.empId=id;
    }
    displayEmpDetails(){
console.log(`Employee name is ${this.empName} and Id is ${this.empId}`);
    }
}
const emp1=new Employee("sean",453);
emp1.displayEmpDetails();
const emp2=new Employee("todd",600);
emp2.displayEmpDetails();