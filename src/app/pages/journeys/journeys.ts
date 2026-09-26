import { Component, OnInit, signal } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { environment } from '../../../environments/environment'

interface Src {
  original: string
}

interface Photo {
  alt: string
  photographer: string
  photographer_id: number
  photographer_url: string
  src: Src
}

interface Img {
  page: number
  next_page: string
  per_page: number
  total_results: number
  photos: Photo[]
}

@Component({
  imports: [Toolbar],
  selector: 'app-journeys',
  styleUrl: './journeys.css',
  templateUrl: './journeys.html'
})
export class Journeys implements OnInit {
  mountains = signal<Photo[]>([])

  ngOnInit() {
    this.getImg()
  }

  //get Images
  async getImg() {
    const url = environment.pexelsApiUrl
    const apiKey = environment.pexelsApiKey

    const response = await fetch(url, {
      headers: { Authorization: apiKey }
    })
    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }
    const data: Img = await response.json()
    console.log(data.photos)
    this.mountains.set(data.photos)
  }
}
