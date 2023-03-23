import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers:[EmployeeServiceService]
})
export class EmployeeModule { }
