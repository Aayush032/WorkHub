import { Component } from '@angular/core';
import { CurrentProjectComponent } from "./current-projects/current-projects.component";
import { RecentUpdateComponent } from './recent-updates/recent-updates.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrentProjectComponent, RecentUpdateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
