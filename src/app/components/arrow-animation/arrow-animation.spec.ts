import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ArrowAnimation } from './arrow-animation'

describe('ArrowAnimation', () => {
  let component: ArrowAnimation
  let fixture: ComponentFixture<ArrowAnimation>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowAnimation]
    }).compileComponents()

    fixture = TestBed.createComponent(ArrowAnimation)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
