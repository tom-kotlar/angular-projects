import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './version-logs.component.html',
})
export class VersionLogsComponent implements OnChanges {
  @Input() vc = '';
  logs: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['vc'];
    if (changes['vc'].isFirstChange()) {
      this.logs.push(`initial version is ${currentValue.trim()}`);
    } else {
      this.logs.push(`version changed to ${currentValue.trim()}`);
    }
  }
}
