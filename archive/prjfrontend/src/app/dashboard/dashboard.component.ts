import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
