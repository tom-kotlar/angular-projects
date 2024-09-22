import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NotificationServiceService } from '../notification-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-manager-service',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './notification-manager.component.html',
})
export class NotificationManagerComponent {
  notificationService = inject(NotificationServiceService);
  count$ = this.notificationService.notificationCoutn$;

  addNotification() {
    this.notificationService.addNotification();
  }

  removeNotification() {
    this.notificationService.removeNotification();
  }

  resetCount() {
    this.notificationService.resetNotificationCount();
  }
}
