import { Component, OnInit, signal } from '@angular/core'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { Toolbar } from '../../components/toolbar/toolbar'
import { Hero } from '../../components/sections/hero/hero'
import { About } from '../../components/sections/about/about'
import { WeatherAnimation } from '../../components/weather-animation/weather-animation'
import { CarouselSection } from '../../components/sections/carousel-section/carousel-section'
import { Reviews } from '../../components/sections/reviews/reviews'
import { environment } from '../../../environments/environment'

export interface Post {
  title: string
  username: string
  firstName: string
  lastName: string
  body: string
  tags: string[] | null | undefined
}

interface Posts {
  title: string
  body: string
  userId: string
  tags: string[] | null | undefined
}

interface Users {
  username: string
  id: string
  firstName: string
  lastName: string
}

@Component({
  imports: [
    Toolbar,
    Hero,
    WeatherAnimation,
    About,
    CarouselSection,
    Reviews,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html'
})
export class Home implements OnInit {
  posts = signal<Post[]>([])

  ngOnInit() {
    this.getPosts()
  }

  // get posts
  async getPosts() {
    const urlPosts = `${environment.postsApiUrl}/search?q=nature&limit=10`
    const urlUsers = environment.usersApiUrl

    const [postsResponse, usersResponse] = await Promise.all([fetch(urlPosts), fetch(urlUsers)])

    const postsData = await postsResponse.json()
    const usersData = await usersResponse.json()

    console.log('postsData', postsData)
    console.log('userData', usersData)

    const postsWithUsers = this.combinePostsAndUsers(postsData.posts, usersData.users)

    this.posts.set(postsWithUsers)
    console.log('POSTS SIGNAL:', this.posts())
  }

  combinePostsAndUsers(posts: Posts[], users: Users[]): Post[] {
    const usersById = new Map(users.map((user) => [user.id, user]))

    return posts
      .map((post) => {
        const user = usersById.get(post.userId)

        return {
          ...post,
          firstName: user?.firstName ?? 'Unknown First Name',
          lastName: user?.lastName ?? 'Unknown Last Name',
          username: user?.username ?? 'Unknown user'
        }
      })
      .filter((post) => post.username !== 'Unknown user')
      .slice(0, 3)
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement
    const scrollY = container.scrollTop

    const hero = container.querySelector<HTMLElement>('.hero')

    if (!hero) {
      return
    }

    const heroHeight = hero.offsetHeight

    // Progress of scrolling through the hero section
    const progress = Math.min(scrollY / heroHeight, 1)

    //layers of hero section
    const sky = hero.querySelector<HTMLElement>('.sky')
    const forest = hero.querySelector<HTMLElement>('.forest')
    const mountain = hero.querySelector<HTMLElement>('.mountain')
    const fog = hero.querySelector<HTMLElement>('.fog')
    const title = hero.querySelector<HTMLElement>('h1')

    if (sky) {
      sky.style.transform = `
      translateY(${scrollY * 0.1}px)
      scale(${1 + progress * 0.05})
    `
    }

    if (forest) {
      forest.style.transform = `
      translateY(${scrollY * 0.3}px)
      scale(${1 + progress * 0.08})
    `
    }

    if (mountain) {
      mountain.style.transform = `
      translateY(${scrollY * 0.2}px)
      scale(${1 + progress * 0.08})
    `
    }

    if (fog) {
      fog.style.transform = `
      translateY(${scrollY * 0.8}px)
      scale(${1 + progress * 0.12})
    `
    }

    if (title) {
      title.style.transform = `
      translateY(${scrollY * 0.5}px)
      scale(${1 - progress * 0.15})
    `
      title.style.opacity = `${1 - progress * 1.2}`
    }
  }
}
