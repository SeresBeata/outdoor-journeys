import { Component, inject } from '@angular/core'
import { Toolbar } from '../../components/toolbar/toolbar'
import { FrameAnimation } from '../../components/frame-animation/frame-animation'
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'

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
      console.log(this.contactForm.value)
    }
  }
}
