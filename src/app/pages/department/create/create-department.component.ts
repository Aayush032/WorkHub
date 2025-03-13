import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../../shared/header/header.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DepartmentService } from "../../../core/services/department.service";
import { FormValidators } from "../../../core/validators/validators";
import { ReactiveFormsModule } from "@angular/forms";
import { PrimaryButtonComponent } from "../../../shared/primary-button/primary-button.component";
import { Router } from "@angular/router";
import { DEPARTMENT_ROUTES } from "../../../router/department-route";


export interface DepartmentCreateFormData{
  name: string;
  description: string;
  code: string;
}

@Component({
  selector: 'app-create-department',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.css'
})

export class DepartmentCreateComponent implements OnInit{
  departmentForm: FormGroup;
  private _departmentCreateSubscription: Subscription[] = [];

  get isFormValid(): boolean{
    return this.departmentForm.valid;
  }
  constructor(private formBuilder: FormBuilder, private departmentService: DepartmentService, private router: Router){
    this.departmentForm = this.formBuilder.group({
      name: ['', FormValidators.nameValidator],
      description: ['', FormValidators.descriptionValidator],
      code: ['', FormValidators.codeValidator]
    });
  }
    ngOnInit(): void {
    }

    onCreate(){
      console.log("test")
    }

    onCancel(){
      this.router.navigate([DEPARTMENT_ROUTES.DEPARTMENT])
    }
}