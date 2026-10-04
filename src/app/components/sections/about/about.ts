import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { environment } from '../../../../environments/environment'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  imports: [MatButtonModule, TranslatePipe],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html'
})
export class About {
  gridItems = [
    {
      title: 'home.about.weather.title',
      p: 'home.about.weather.description',
      link: environment.navWeatherCheck,
      linkText: 'home.about.weather.btn-text'
    },
    {
      title: 'home.about.trash.title',
      p: 'home.about.trash.description'
    },
    {
      imgUrl: environment.aboutSectionImgBg
    },
    {
      title: 'home.about.wildlife.title',
      p: 'home.about.wildlife.description'
    },
    {
      title: 'home.about.journey.title',
      p: 'home.about.journey.description',
      link: environment.navJourneys,
      linkText: 'home.about.journey.btn-text'
    }
  ]
}
