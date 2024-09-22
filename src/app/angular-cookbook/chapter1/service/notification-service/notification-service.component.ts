import { Component } from '@angular/core';
import { NotificationButtonComponent } from '../notification-button/notification-button.component';
import { NotificationManagerComponent } from '../notification-manager/notification-manager.component';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notification-service',
  standalone: true,
  imports: [NotificationButtonComponent, NotificationManagerComponent],
  templateUrl: './notification-service.component.html',
  providers: [NotificationServiceService],
})
export class NotificationServiceComponent {
  notificationCount = 0;

  updateCount(count: number) {
    this.notificationCount = count;
  }
}
