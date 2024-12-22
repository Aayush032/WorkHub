import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './elements/sidebar/sidebar.component';

export const routes: Routes = [
    {
        path : "Get-Started",
        component : LandingComponent,
        title : "WorkHub"
    },
    {
        path : "",
        component : SidebarComponent,
        children : [
            {
                path : "dashboard",
                component : DashboardComponent
            }
        ]
    }
];
