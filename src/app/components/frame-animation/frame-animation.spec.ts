import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FrameAnimation } from './frame-animation'

describe('FrameAnimation', () => {
  let component: FrameAnimation
  let fixture: ComponentFixture<FrameAnimation>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameAnimation]
    }).compileComponents()

    fixture = TestBed.createComponent(FrameAnimation)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
