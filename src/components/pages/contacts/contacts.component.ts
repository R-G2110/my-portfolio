import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrapdoorFormComponent } from '../../partials/trapdoor-form/trapdoor-form.component';
import { ToastComponent } from '../../partials/toast/toast.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TrapdoorFormComponent, ToastComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  isFormOpen = false;
  showToast = false;

  constructor() { }

  ngOnInit(): void { }

  // openForm(event: Event): void {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log('Apertura form');
  //   this.isFormOpen = true;
  // }

  // sendMessage(event: Event): void {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log('Messaggio inviato!');
  //   // Qui puoi inserire la logica per inviare il messaggio

  //   // Effetto di chiusura delle porte
  //   this.isFormOpen = false;
  //   // Mostra il toast di notifica
  //   this.showToast = true;
  //   setTimeout(() => {
  //     this.showToast = false;
  //   }, 5000);
  // }
}
