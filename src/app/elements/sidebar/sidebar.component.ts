import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from "../main/main.component";
import { BadgeComponent } from "../../shared/badge/badge.component";
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MainComponent, BadgeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = MenuItems;
}
