import { Component } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { Hero } from '../../components/sections/hero/hero'

@Component({
  imports: [Toolbar, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html'
})
export class Home {
  onScroll(event: Event) {
    const container = event.target as HTMLElement
    const scrollY = container.scrollTop

    const layers = container.querySelectorAll<HTMLElement>('.parallax')

    layers.forEach((layer) => {
      const speed = Number(layer.dataset['speed'] ?? 0)

      layer.style.transform = `translateY(${scrollY * speed}px)`
    })
  }
}
