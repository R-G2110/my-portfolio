// trapdoor-form.component.ts
import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { NotificationService } from '../../../services/notification.service';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-trapdoor-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trapdoor-form.component.html',
  styleUrls: ['./trapdoor-form.component.scss']
})
export class TrapdoorFormComponent {
  isFormOpen = false;

  contact = {
    name: '',
    email: '',
    message: "Hi, let's get in touch."
  };

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private zone: NgZone,
    private loaderService: LoaderService // iniezione del LoaderService
  ) {}

  openForm(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isFormOpen = true;
  }

  sendMessage(form: NgForm): void {
    console.log('Dati inseriti:', this.contact);

    if (form.invalid) {
      this.notificationService.showToast('Please fill required fields', 'error');
      return;
    }

    const serviceID = 'service_6zpffss';
    const templateID = 'template_uv7ftgf';
    const userID = 'U-Ov3xuHzoTLNNdEX';

    const templateParams = {
      user_name: this.contact.name,
      user_email: this.contact.email,
      message: this.contact.message
    };

    // Mostra il loader prima dell'invio
    this.loaderService.show();

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response);
        this.notificationService.showToast('Message sent.', 'success');
        form.resetForm({
          name: '',
          email: '',
          message: "Hi, let's get in touch."
        });
        this.isFormOpen = false;
        // Nascondi il loader dopo il successo
        this.loaderService.hide();
      })
      .catch((error) => {
        console.error('EMAILJS ERROR:', error);
        this.notificationService.showToast('Error sending message. Try again later.', 'error');
        // Nascondi il loader anche in caso di errore
        this.loaderService.hide();
      });
  }
}
