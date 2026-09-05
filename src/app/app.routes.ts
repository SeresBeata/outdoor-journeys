import { Routes } from '@angular/router'
import { Home } from './pages/home/home'

// redirect to home
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  }
]
