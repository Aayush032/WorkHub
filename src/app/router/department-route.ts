import { Route } from "@angular/router";
import { DepartmentCreateComponent } from "../pages/department/create/create-department.component";
import { DepartmentComponent } from "../pages/department/department.component";

export enum DEPARTMENT_ROUTES {
    DEPARTMENT = 'department',
    CREATE = 'create',
}

export const Routes: Route[] = [
    {
        path: ``,
        component: DepartmentComponent
    },
    {
        path: `${DEPARTMENT_ROUTES.CREATE}`,
        title: "Create",
        loadComponent: () => import('../pages/department/create/create-department.component').then(module => module.DepartmentCreateComponent)
    }
]