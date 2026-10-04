import { Injectable, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService)

  currentLanguage = 'en'

  constructor() {
    const savedLanguage = localStorage.getItem('language')

    this.currentLanguage = savedLanguage ?? 'en'

    this.translate.use(this.currentLanguage)
  }

  changeLanguage(language: string) {
    this.currentLanguage = language

    this.translate.use(language)

    localStorage.setItem('language', language)
  }
}
