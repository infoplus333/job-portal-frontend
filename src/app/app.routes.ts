import { JobPortalComponent } from './module/job-portal/job-portal.component';
import { LayoutComponent } from './module/layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'job-portal', pathMatch: 'full'},
      {path: 'job-portal', component: JobPortalComponent}
    ]
  }
];
