import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  public user!: any;
  public dataValue!: any;
  public showError1!:any;
  public showError2!:any;
  public showError3!:any;
  public showError4!:any;
  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeServiceService,
    private router: Router
  ) {
    this.user = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      technology: ['', [Validators.required]],
      
    },{ updateOn: "blur" });
  }

  get firstName() {
    return this.user.get('firstName');
  }
  get lastName() {
    return this.user.get('lastName');
  }
  get email() {
    return this.user.get('email');
  }

  get technology() {
    return this.user.get('technology');
  }
  loginUser() {
    console.log(this.user);
    console.log(this.user.value.firstName);
    this.dataValue = this.service.addEmployee(
      this.user.value.firstName,
      this.user.value.lastName,
      this.user.value.email,
      this.user.value.technology
    );
    console.log(this.dataValue);
    localStorage.setItem('UserData', JSON.stringify(this.dataValue));
   
    this.router.navigate(['employee-list'])
  }
}
