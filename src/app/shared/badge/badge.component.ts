import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [AvatarModule, OverlayBadgeModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent implements OnInit{
  @Input() fullname!:string;
  names :string[] = [];
  label:string="";
  constructor(){
  }
  ngOnInit(): void {
    this.getBadgeName(this.fullname)
  }
  getBadgeName(name:string):void{
    this.names = name.split(" ");
    this.label = this.names[0].charAt(0)+this.names[1].charAt(0);
  }
}
