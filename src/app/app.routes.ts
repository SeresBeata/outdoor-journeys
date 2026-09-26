import { Routes } from '@angular/router'
import { Home } from './pages/home/home'
import { Journeys } from './pages/journeys/journeys'

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
  },
  {
    path: 'journeys',
    component: Journeys
  }
]
