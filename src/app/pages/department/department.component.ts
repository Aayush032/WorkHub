import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { DepartmentResponse, DepartmentService } from '../../core/services/department.service';
import { NoDataComponent } from '../../shared/no-data/no-data.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENT_ROUTES } from '../../router/department-route';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [HeaderComponent, PrimaryButtonComponent, NoDataComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  departmentResponse: DepartmentResponse[] = [];
  _departmentSubscription: Subscription[] = [];
  constructor(private departmentSetvice:DepartmentService, private router: Router, private route: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.getDepartments();
  }

  get isDepartmentPresent(): boolean{
    return this.departmentResponse.length > 0;
  }

  getDepartments(){
    this._departmentSubscription.push(
      this.departmentSetvice
      .getAll()
      .subscribe(
        {
          next: (response => {
            this.departmentResponse = response;
          })
        }
      )
    )
  }

  onCreate(){
    this.router.navigate([DEPARTMENT_ROUTES.CREATE],{
      relativeTo: this.route
    })
  }

  

}
