import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, ToastMessage  } from '../../../services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  showToast = false;
  message = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.toast$.subscribe((toast: ToastMessage) => {
      this.message = toast.message;
      this.toastType = toast.type;
      this.showToast = true;
      setTimeout(() => this.showToast = false, 5000);
    });
  }
}
