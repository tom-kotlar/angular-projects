import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationServiceService {
  private count$ = new BehaviorSubject<number>(0);
  //exposing Observable
  notificationCoutn$ = this.count$.asObservable();

  /**
   *  getter makes the design more flexible.
   *  It provides an additional layer of abstraction and reduces
   *  the risk of exposing internal implementation details directly.
   *
   * get notificationsCount$(): Observable<number> {
   * return this.count$.asObservable();
   * }
   */

  private setCount(count: number) {
    this.count$.next(count);
  }

  addNotification(): void {
    this.setCount(this.count$.value + 1);
  }

  removeNotification(): void {
    if (this.count$.value > 0) {
      this.setCount(this.count$.value - 1);
    }
  }

  resetNotificationCount(): void {
    this.setCount(0);
  }
}
