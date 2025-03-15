import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, RippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MessageService]
})
export class AppComponent {
  title = 'WorkHub';
}
