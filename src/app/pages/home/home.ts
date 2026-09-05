import { Component } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { Hero } from '../../components/sections/hero/hero'

@Component({
  imports: [Toolbar, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html'
})
export class Home {}
