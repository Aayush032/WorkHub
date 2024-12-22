import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() name!: string; 
  @Input() icon!:string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleClick(){
    this.onClick.emit();
  }

}
