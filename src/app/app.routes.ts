import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';
import { TeamLeadComponent } from './pages/team-lead/team-lead.component';
import { DepartmentComponent } from './pages/department/department.component';
import {PAGES} from './constants/page-constant';
import { ClientComponent } from './pages/client/client.component';

export const routes: Routes = [
    {
        path : PAGES.GETSTARTED,
        component : LandingComponent,
        title : "WorkHub"
    },
    {
        path : "",
        component : SidebarComponent,
        children : [
            {
                path:"",
                redirectTo:PAGES.DASHBOARD,
                pathMatch:"full",
                title:"Dashboard"
            },
            {
                path : PAGES.DASHBOARD,
                component : DashboardComponent,
                title:"Dashboard"
            },
            {
                path:PAGES.TEAMLEAD,
                component:TeamLeadComponent,
                title:"Team Leads"
            },
            {
                path:PAGES.DEPARTMENT,
                component:DepartmentComponent,
                title:"Departments"
            },
            {
                path:PAGES.CLIENT,
                component:ClientComponent,
                title:"Clients"
            }
        ]
    }
];
