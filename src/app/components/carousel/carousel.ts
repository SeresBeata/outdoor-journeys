import { Component } from '@angular/core'
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap/carousel'
import { TranslatePipe } from '@ngx-translate/core'
import { environment } from '../../../environments/environment'

@Component({
  imports: [NgbCarousel, NgbSlide, TranslatePipe],
  selector: 'app-carousel',
  styleUrl: './carousel.css',
  templateUrl: './carousel.html'
})
export class Carousel {
  images = [16, 29, 62, 66, 83, 984, 125, 128].map((n) => {
    return {
      src: `${environment.carouselUrl}${n}/900/500`,
      text: 'home.carousel.title',
      link: environment.navJourneys
    }
  })
}
