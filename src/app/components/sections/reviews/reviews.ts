import { Component, input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'

//import interface
import { Post } from '../../../pages/home/home'

@Component({
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  selector: 'app-reviews',
  styleUrl: './reviews.css',
  templateUrl: './reviews.html'
})
export class Reviews {
  posts = input<Post[]>([])
}
