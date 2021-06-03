class EmployeePayrollData
{
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
  
    /*constructor(id,name,salary)
    {
        this.id=id;
        this.name= name;
        this.salary= salary;
    }*/
    //using spread method of array to define constructor
    constructor (...params)
    {
        this.id= params[0];
        this.name= params[1];
        this.salary= params[2];
        this.gender= params[3];
        this.startDate= params[4];
    }
    //getter and setter method
    get name(){ return this._name;}
    set name(name)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }
    //method 
    //toString()
    //{
      //  return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary;
    //}
    toString()
    {
        const options= {year:'numeric',month:'long',day:'numeric'};
        const empDate= this.startDate===undefined ? "undefined": this.startDate.toLocaleDateString("en-US",options); 
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary+", gender= "+this.gender+", startdate= "+ empDate;
    }
}
let employeePayrollData= new  EmployeePayrollData(1,"Nilima",30000);
console.log(employeePayrollData.toString());
//changing data directly
employeePayrollData.id=0;
try
{
    employeePayrollData.name= "Naina";
    console.log(employeePayrollData.toString());
}
catch(ex)
{
    console.error(ex);
}

//setting up new object
let newEmployeePayrollData= new EmployeePayrollData(1,"Mrunmai",25000,"F",new Date());
console.log(newEmployeePayrollData.toString());