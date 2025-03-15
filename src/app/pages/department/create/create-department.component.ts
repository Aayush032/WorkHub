import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../../core/services/department.service';
import { FormValidators } from '../../../core/validators/validators';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../../shared/primary-button/primary-button.component';
import { Router } from '@angular/router';
import { DEPARTMENT_ROUTES } from '../../../router/department-route';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';


export interface DepartmentCreateFormData {
  name: string;
  description: string;
  code: string;
}

@Component({
  selector: 'app-create-department',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, ToastModule, RippleModule],
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.css',
  providers: [MessageService],
})
export class DepartmentCreateComponent implements OnInit {
  departmentForm: FormGroup;
  departmentDetails?: DepartmentCreateFormData;
  private _departmentCreateSubscription: Subscription[] = [];

  get isFormValid(): boolean {
    return this.departmentForm.valid;
  }
  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.departmentForm = this.formBuilder.group({
      name: ['', FormValidators.nameValidator],
      description: ['', FormValidators.descriptionValidator],
      code: ['', FormValidators.codeValidator],
    });
  }
  ngOnInit(): void {}

  onCreate() {
    this.departmentDetails = this.departmentForm.value;
    if (this.departmentForm.valid) {
      this.departmentService.create(this.departmentDetails!).subscribe({
        next: (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: `${response.message}`, key: 'br', life: 1000});
          setTimeout(() => {
            this.router.navigate([DEPARTMENT_ROUTES.DEPARTMENT]);
          }, 1000);
        },
      });
    }
  }

  onCancel() {
    this.router.navigate([DEPARTMENT_ROUTES.DEPARTMENT]);
  }
}
