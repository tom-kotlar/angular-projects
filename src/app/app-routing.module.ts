import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'input-output',
    loadComponent: () =>
      import(
        './angular-cookbook/chapter1/input-output/notification/notification.component'
      ).then((m) => m.NotificationComponent),
  },
  {
    path: 'service',
    loadComponent: () =>
      import(
        './angular-cookbook/chapter1/service/notification-service/notification-service.component'
      ).then((m) => m.NotificationServiceComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
