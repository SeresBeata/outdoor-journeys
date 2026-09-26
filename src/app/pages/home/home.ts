import { Component, OnInit } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { Hero } from '../../components/sections/hero/hero'
import { About } from '../../components/sections/about/about'
import { WeatherAnimation } from '../../components/weather-animation/weather-animation'
import { CarouselSection } from '../../components/sections/carousel-section/carousel-section'
import { environment } from '../../../environments/environment'

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

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
  imports: [Toolbar, Hero, WeatherAnimation, MatButtonModule, About, CarouselSection],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html'
})
export class Home implements OnInit {
  comments: Comment[] = []
  mountains: Photo[] = []

  ngOnInit() {
    this.getComments()
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
    this.mountains = data.photos
  }

  //post comment
  async postComment() {
    const API_URL = environment.jsonplaceholderPostApiUrl
    const url = `${API_URL}`
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: 123,
          userId: 1234,
          title: 'title',
          body: 'body'
        })
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const res = await response.json()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  // get comments
  async getComments() {
    const API_URL = environment.jsonplaceholderCommentApiUrl
    const url = `${API_URL}?_limit=10`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      this.comments = await response.json()
      console.log(this.comments)
    } catch (error) {
      console.error(error)
    }
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement
    const scrollY = container.scrollTop

    const hero = container.querySelector<HTMLElement>('.hero')

    if (!hero) {
      return
    }

    const heroHeight = hero.offsetHeight

    // Progress of scrolling through the hero section
    const progress = Math.min(scrollY / heroHeight, 1)

    //layers of hero section
    const sky = hero.querySelector<HTMLElement>('.sky')
    const forest = hero.querySelector<HTMLElement>('.forest')
    const mountain = hero.querySelector<HTMLElement>('.mountain')
    const fog = hero.querySelector<HTMLElement>('.fog')
    const title = hero.querySelector<HTMLElement>('h1')

    if (sky) {
      sky.style.transform = `
      translateY(${scrollY * 0.1}px)
      scale(${1 + progress * 0.05})
    `
    }

    if (forest) {
      forest.style.transform = `
      translateY(${scrollY * 0.3}px)
      scale(${1 + progress * 0.08})
    `
    }

    if (mountain) {
      mountain.style.transform = `
      translateY(${scrollY * 0.2}px)
      scale(${1 + progress * 0.08})
    `
    }

    if (fog) {
      fog.style.transform = `
      scale(${1 + progress * 0.12})
    `
    }

    if (title) {
      title.style.transform = `
      translateY(${scrollY * 0.5}px)
      scale(${1 - progress * 0.15})
    `
      title.style.opacity = `${1 - progress * 1.2}`
    }
  }
}
