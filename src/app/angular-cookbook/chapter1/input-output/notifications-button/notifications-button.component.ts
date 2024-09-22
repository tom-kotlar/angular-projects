import { Component, Input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-notifications-button',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './notifications-button.component.html',
})
export class NotificationsButtonComponent {
  @Input() count = 0;
}
