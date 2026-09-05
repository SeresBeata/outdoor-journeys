import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
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

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
    document.documentElement.classList.toggle('dark-mode', this.isDarkMode)
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
  }
}
