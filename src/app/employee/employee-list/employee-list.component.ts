import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor (private service:EmployeeServiceService){

  }
  public dataLocal!:any;
  public data!:any;
 
  
   ngOnInit(): void {

    if(localStorage.length===0 )
    {
      console.log("hello");
      this.data=this.service.employee;
    }
    else{
       this.data=JSON.parse(localStorage.getItem('value') || '{}');
     }
    
     this.data=this.service.employee;
    }
    delete(id:number)
    {
      
     this.service.deleteEmployee(id);
      
    }
}
