import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebPath } from '../../constants/api-constants';
import { GenericResponse } from '../model/generic-response';
import { DepartmentCreateFormData } from '../../pages/department/create/create-department.component';

export interface DepartmentResponse {
  departmentId: number;
  departmentName: string;
  description: string;
  departmentCode: string;
  status: string;
}

const enum APIENDPOINT {
  DEPARTMENT = 'department',
  CREATE = `${DEPARTMENT}/create`,
}

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<DepartmentResponse[]> {
    return this.http
      .get<GenericResponse<DepartmentResponse[]>>(WebPath.generateWebPath(APIENDPOINT.DEPARTMENT))
      .pipe(map((response) => response.data));
  }

  create(departmentDetails: DepartmentCreateFormData){
    return this.http.post<GenericResponse>(WebPath.generateWebPath(APIENDPOINT.CREATE),departmentDetails);
  }

  
}
