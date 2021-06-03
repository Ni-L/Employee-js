class EmployeePayrollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
   constructor(id,name,salary)
    {
        this.id=id;
        this.name= name;
        this.salary= salary;
    }
   
    //getter and setter method
    //for defining variable inside a getter setter or properties,
    // syntax is to use underscore and then name of variable.
    get name(){ return this._name;}
    set name(name){return this._name=name;}
   
    //method 
    toString()
    {
    return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary;
    }
   
}
let employeePayrollData= new  EmployeePayrollData(1,"Naina",30000);
console.log(employeePayrollData.toString());
