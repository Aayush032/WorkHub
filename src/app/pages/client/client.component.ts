import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [PrimaryButtonComponent, HeaderComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
