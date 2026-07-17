import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Email } from './email/email';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'sendemail',
    component: Email,
    pathMatch: 'full'
  }
];
