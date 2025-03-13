import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WebPath } from '../../constants/api-constants';
import { GenericResponse } from '../model/generic-response';

export interface DepartmentResponse {
  id: number;
  name: string;
  description: string;
  code: string;
  status: string;
}

export interface DepartmentCreateRequest{
  name: string;
  description: string;
  code: string;
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

  
}
