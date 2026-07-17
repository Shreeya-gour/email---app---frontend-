import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmailService } from '../service/email';

@Component({
  selector: 'email',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './email.html',
  styleUrl: './email.css'
})
export class Email {

  data = {
    to: '',
    subject: '',
    message: ''
  };

  constructor(
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {}

  doSubmitForm() {

    if (
      this.data.to.trim() === '' ||
      this.data.subject.trim() === '' ||
      this.data.message.trim() === ''
    ) {
  
      this.snackBar.open(
        "Fields cannot be empty!",
        "OK",
        {
          duration: 3000
        }
      );
  
      return;
    }
  
    console.log(this.data);
  
    this.emailService.sendEmail(this.data)
      .subscribe({
        next: (response) => {
  
          console.log("Success:", response);
  
          this.snackBar.open(
            "Email sent successfully!",
            "OK",
            {
              duration: 3000
            }
          );
  
          // Clear the form
          this.data = {
            to: '',
            subject: '',
            message: ''
          };
  
        },
  
        error: (error) => {
  
          console.log("Error:", error);
  
          this.snackBar.open(
            "Failed to send email!",
            "OK",
            {
              duration: 3000
            }
          );
  
        }
      });
  }
}