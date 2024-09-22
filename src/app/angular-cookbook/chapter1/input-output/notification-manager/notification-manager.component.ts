import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notification-manager',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './notification-manager.component.html',
})
export class NotificationManagerComponent {
  @Input() count = 0;
  @Output() countListener = new EventEmitter<number>();

  addNotification() {
    this.count++;
    this.countListener.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.countListener.emit(this.count);
  }

  resetCount() {
    this.count = 0;
    this.countListener.emit(this.count);
  }
}
