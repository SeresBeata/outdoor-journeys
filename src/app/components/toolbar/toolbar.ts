import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
  NgbDropdownButtonItem
} from '@ng-bootstrap/ng-bootstrap/dropdown'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { LanguageService } from '../../services/language'
import { environment } from '../../../environments/environment'

@Component({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownButtonItem,
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html'
})
export class Toolbar {
  navHome = environment.navHome
  navJourneys = environment.navJourneys
  navWeatherCheck = environment.navWeatherCheck
  navContact = environment.navContact
  navImgEn = environment.navLangImgEn
  navImgDe = environment.navLangImgDe

  isDarkMode = false

  constructor(public languageService: LanguageService) {
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
