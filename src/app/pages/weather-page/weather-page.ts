import { Component } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'

@Component({
  imports: [Toolbar],
  selector: 'app-weather-page',
  styleUrl: './weather-page.css',
  templateUrl: './weather-page.html'
})
export class WeatherPage {}
