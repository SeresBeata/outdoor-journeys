import { Component, signal } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { environment } from '../../../environments/environment'

interface Weather {
  name: string
  sys: Sys
  weather: WeatherSpec[]
  main: Main
  wind: Wind
}

interface Sys {
  country: string
  id: string
  sunrise: string
  sunset: string
}

interface WeatherSpec {
  id: string
  main: string
  description: string
  icon: string
}

interface Main {
  humidity: string
  temp: number
}

interface Wind {
  speed: string
  deg: string
}

@Component({
  imports: [
    Toolbar,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],

  selector: 'app-weather-page',
  styleUrl: './weather-page.css',
  templateUrl: './weather-page.html'
})
export class WeatherPage {
  weather = signal<Weather | null>(null)
  img = signal('')
  city = signal('')
  lang = signal('en')

  round(val: number | undefined) {
    return val !== undefined ? Math.round(val) : ''
  }

  async getWeather() {
    const apiKey = environment.weatherApiKey
    const url = `${environment.weatherApiUrl}?q=${this.city()}&units=metric&lang=en&APPID=${apiKey}`
    const imgUrl = environment.weatherImgUrl

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        console.error(data.message)
        throw new Error(data.message)
      }

      console.log(data)
      this.weather.set(data as Weather)
      this.img.set(`${imgUrl}${data.weather[0].icon}@2x.png`)
    } catch (error) {
      console.error('Weather error:', error)

      if (error instanceof Error) {
        console.error()
        alert(`${error.message}`)
      }
    }
  }
}
