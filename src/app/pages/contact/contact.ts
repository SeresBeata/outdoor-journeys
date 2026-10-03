import { Component, inject } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { FrameAnimation } from '../../components/frame-animation/frame-animation'
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'
import { environment } from '../../../environments/environment'

@Component({
  imports: [
    Toolbar,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FrameAnimation
  ],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html'
})
export class Contact {
  private fb = inject(FormBuilder)

  contactForm = this.fb.group({
    personal: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),

    message: this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  })

  submit() {
    if (this.contactForm.valid) {
      const userMessage = {
        name: this.contactForm.value?.personal?.name,
        email: this.contactForm.value?.personal?.email,
        subject: this.contactForm.value?.message?.subject,
        message: this.contactForm.value?.message?.message
      }

      this.postComment(userMessage)
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1
  }

  async postComment(payload: any) {
    const url = environment.contactApiUrl
    const uuid = self.crypto.randomUUID()
    const userId = this.getRandomInt(200)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uuid: uuid,
          userId: userId,
          ...payload
        })
      })

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const res = await response.json()
      console.log(res)
      console.log(response)

      if (response.ok && response.status == 201) {
        alert('Thank you for your message: ' + payload.name)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
