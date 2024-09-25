import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { VersionLogsComponent } from '../version-logs/version-logs.component';

@Component({
  selector: 'app-version-control',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    VersionLogsComponent,
  ],
  templateUrl: './version-control.component.html',
})
export class VersionControlComponent implements OnInit {
  versionName = '0.0.0';
  versionForm = new FormGroup({
    version: new FormControl('', [
      Validators.required,
      Validators.pattern('([0-9]+)\\.([0-9]+)\\.([0-9]+)'),
    ]),
  });

  loading: boolean = false;

  ngOnInit(): void {
    this.versionForm.get('version')?.setValue(this.versionName);
  }

  onSubmit() {
    console.log('hello');
    if (!this.versionForm.valid) {
      alert('Invalid version value. Please use symantic versioning');
      return;
    }
    this.versionName = this.versionForm.get('version')?.value || '';
  }
}
