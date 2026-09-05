import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatSlideToggleModule],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html'
})
export class Toolbar {
  isDarkMode = false

  constructor() {
    const savedTheme = localStorage.getItem('theme')
    this.isDarkMode = savedTheme === 'dark'
    document.documentElement.classList.toggle('dark-mode', this.isDarkMode)
  }

  toggleDarkMode(enabled: boolean) {
    this.isDarkMode = enabled
    document.documentElement.classList.toggle('dark-mode', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
  }
}
