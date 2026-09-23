import { Component } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { Hero } from '../../components/sections/hero/hero'
import { WeatherAnimation } from '../../components/weather-animation/weather-animation'

@Component({
  imports: [Toolbar, Hero, WeatherAnimation],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html'
})
export class Home {
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
