import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path : "home",
        component : HomeComponent,
        title : "WorkHub"
    },
    {
        path : "",
        redirectTo : "home",
        pathMatch : 'full',
        title : "WorkHub"
    }
];
