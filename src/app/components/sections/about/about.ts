import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { environment } from '../../../../environments/environment'

@Component({
  imports: [MatButtonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html'
})
export class About {
  gridItems = [
    {
      title: 'Plan ahead and prepare',
      p: 'Check local weather, trail rules, and seasonal access limits before you go. When outdoor visitors plan ahead and prepare, it helps to accomplish trip goals safely and enjoyably while simultaneously minimizing damage to the land. Poor planning often results in a less enjoyable experience and damage to natural and cultural resources.',
      link: environment.navWeatherCheck,
      linkText: 'Check the Weather'
    },
    {
      title: 'Pack out all trash',
      p: 'Bring home everything you bring in, including food scraps, wrappers, and hygiene waste'
    },
    {
      imgUrl: environment.aboutSectionImgBg
    },
    {
      title: 'Respect wildlife',
      p: 'Watch animals from a safe distance, never feed them, and give them extra space during nesting or breeding seasons.'
    },
    {
      title: 'Stay on designated paths',
      p: 'Use marked trails and established campsites for safety and to protect plants, soil, and wildlife habitats. Durable surfaces include established trails, campsites, rock, gravel, and dry grasses or snow. Good campsites are found, not made. Altering a site is not necessary.',
      link: environment.navJourneys,
      linkText: 'Find your Journey'
    }
  ]
}
