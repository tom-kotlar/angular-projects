import { Component } from '@angular/core';
import { VersionControlComponent } from '../version-control/version-control.component';
import { VersionLogsComponent } from '../version-logs/version-logs.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-version',
  standalone: true,
  imports: [VersionControlComponent, VersionLogsComponent, CardModule],
  templateUrl: './version.component.html',
})
export class VersionComponent {}
