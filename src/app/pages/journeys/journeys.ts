import { Component, OnInit, signal } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { ViewChild } from '@angular/core'
import { environment } from '../../../environments/environment'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

interface Src {
  original: string
  tiny: string
  small: string
  medium: string
}

interface Photo {
  alt: string
  photographer: string
  photographer_id: number
  photographer_url: string
  src: Src
}

interface Img {
  page: number
  next_page: string
  per_page: number
  total_results: number
  photos: Photo[]
}

@Component({
  imports: [Toolbar, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  selector: 'app-journeys',
  styleUrl: './journeys.css',
  templateUrl: './journeys.html'
})
export class Journeys implements OnInit {
  mountains = signal<Photo[]>([])
  dataSource = new MatTableDataSource<Photo>([])
  columnsToDisplay = ['image', 'photographer', 'photographer_url']
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand']
  expandedElement: Photo[] | null = null
  apiPageSize = signal(20)

  //Check if element is expanded
  isExpanded(element: Photo[]) {
    return this.expandedElement === element
  }

  // Toggle expanded element
  toggle(element: Photo[]) {
    this.expandedElement = this.isExpanded(element) ? null : element
  }

  @ViewChild(MatPaginator)
  set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator
  }

  ngOnInit() {
    this.getImg()
  }

  //get Images
  async getImg() {
    const url = `${environment.pexelsApiUrl}&per_page=${this.apiPageSize()}`
    const apiKey = environment.pexelsApiKey

    const response = await fetch(url, {
      headers: { Authorization: apiKey }
    })
    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }
    const data: Img = await response.json()
    console.log(data.photos)
    this.mountains.set(data.photos)
    this.dataSource.data = data.photos
  }
}
