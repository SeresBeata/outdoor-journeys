import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'

@Component({
  imports: [TranslatePipe],
  selector: 'app-frame-animation',
  styleUrl: './frame-animation.css',
  templateUrl: './frame-animation.html'
})
export class FrameAnimation {}
