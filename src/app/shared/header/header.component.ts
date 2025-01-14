import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title!:string;
  @Input() showBackButton!:boolean;
  

  constructor(private location:Location){}
  onBack(){
    this.location.back();
  }
}
