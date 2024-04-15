import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.routes'),
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.route'),
  },
  { path: '**', redirectTo: 'home' },
];
