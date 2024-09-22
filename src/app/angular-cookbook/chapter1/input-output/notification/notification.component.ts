import { Component } from '@angular/core';
import { NotificationsButtonComponent } from '../notifications-button/notifications-button.component';
import { NotificationManagerComponent } from '../notification-manager/notification-manager.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationsButtonComponent, NotificationManagerComponent],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  notificationCount = 0;

  updateCount(count: number) {
    this.notificationCount = count;
  }
}
