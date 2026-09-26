import { Component, OnInit, AfterViewInit, signal } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { ViewChild } from '@angular/core'
import { environment } from '../../../environments/environment'

interface Src {
  original: string
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
  imports: [Toolbar, MatTableModule, MatPaginatorModule],
  selector: 'app-journeys',
  styleUrl: './journeys.css',
  templateUrl: './journeys.html'
})
export class Journeys implements OnInit, AfterViewInit {
  mountains = signal<Photo[]>([])
  dataSource = new MatTableDataSource<Photo>([])
  displayedColumns = ['image', 'alt']
  apiPageSize = signal(20)

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  ngOnInit() {
    this.getImg()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
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
