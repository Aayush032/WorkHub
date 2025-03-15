import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { DepartmentResponse, DepartmentService } from '../../core/services/department.service';
import { NoDataComponent } from '../../shared/no-data/no-data.component';
import { finalize, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENT_ROUTES } from '../../router/department-route';
import { LoaderComponent } from '../../shared/loader/loader.component';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [HeaderComponent, PrimaryButtonComponent, NoDataComponent, LoaderComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  departmentResponse: DepartmentResponse[] = [];
  _departmentSubscription: Subscription[] = [];
  isLoading: boolean = false;
  constructor(private departmentSetvice:DepartmentService, private router: Router, private route: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.getDepartments();
  }

  get isDepartmentPresent(): boolean{
    return this.departmentResponse.length > 0;
  }

  getDepartments(){
    this.isLoading = true;
    this._departmentSubscription.push(
      this.departmentSetvice
      .getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false; // Ensures loading state is updated
        })
      )
      .subscribe(
        {
          next: (response => {
            this.departmentResponse = response;
            console.log(this.departmentResponse);
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
