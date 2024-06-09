import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-job-portal',
  standalone: true,
  imports: [CardModule],
  templateUrl: './job-portal.component.html',
  styleUrl: './job-portal.component.scss'
})
export class JobPortalComponent {

}
