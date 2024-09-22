import { Component, Input, inject } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { NotificationServiceService } from '../notification-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-button',
  standalone: true,
  imports: [BadgeModule, CommonModule],
  templateUrl: './notification-button.component.html',
})
export class NotificationButtonComponent {
  notificationService = inject(NotificationServiceService);
  count$ = this.notificationService.notificationCoutn$;
}
