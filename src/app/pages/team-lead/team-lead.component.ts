import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LoaderComponent } from "../../shared/loader/loader.component";

@Component({
  selector: 'app-team-lead',
  standalone: true,
  imports: [HeaderComponent, PrimaryButtonComponent, LoaderComponent],
  templateUrl: './team-lead.component.html',
  styleUrl: './team-lead.component.css'
})
export class TeamLeadComponent {

}
