import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceService {

  constructor() { }
  employee:any[]=[
    {
      id:1,
    fname:"ramesh",
    lname:"yadav",
    email:"ramesh@gmail.com",
    technology:"frontend",
  },
  {
    id:2,
    fname:"ramesh",
    lname:"yadav",
    email:"ramesh@gmail.com",
    technology:"frontend",
  },
  {
    id:3,
    fname:"ramesh",
    lname:"yadav",
    email:"ramesh@gmail.com",
    technology:"frontend",
  },
  {
    id:4,
    fname:"ramesh",
    lname:"yadav",
    email:"ramesh@gmail.com",
    technology:"frontend",
  },
  {
    id:5,
    fname:"ramesh",
    lname:"yadav",
    email:"ramesh@gmail.com",
    technology:"frontend",
  }
];
public deteletId!:any;
public datavalue!:any;

addEmployee(fname:string,lname:string,email:any,technology:string){
 
  
  this.employee.push({id:this.employee.length+1,fname,lname,email,technology})

  return this.employee; 
}
deleteEmployee(id:any)
{
  
this.datavalue=JSON.parse(localStorage.getItem("UserData") || '{}');
localStorage.removeItem("UserData");
if(this.datavalue!=='')
{
  this.deteletId= this.datavalue.findIndex((x:any) => x.id === id);
  console.log(this.deteletId);
 
    this.employee.splice(this.deteletId,1);
    localStorage.setItem('UserData', JSON.stringify(this.employee));
}

 
 
}
}
