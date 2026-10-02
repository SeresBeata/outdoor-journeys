import { Routes } from '@angular/router'
import { Home } from './pages/home/home'
import { Journeys } from './pages/journeys/journeys'
import { WeatherPage } from './pages/weather-page/weather-page'
import { Contact } from './pages/contact/contact'

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
  },
  {
    path: 'weather',
    component: WeatherPage
  },
  {
    path: 'contact',
    component: Contact
  }
]
