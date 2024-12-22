import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
constructor(private router:Router){}
    onButtonClick(){
      console.log("Button clicked");
      this.router.navigate(['/sidebar']);
    }
}
