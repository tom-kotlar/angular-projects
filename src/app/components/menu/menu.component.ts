import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: '🏠 Home', routerLink: '' },
      {
        label: '🧑🏻‍🍳 Angular Cookbook',
        items: [
          {
            label: '🍿 Comunication',
            items: [
              {
                label: '🎬 @Input/Output',
                routerLink: '/input-output',
              },
              {
                label: '🎬 Service',
                routerLink: '/service',
              },
              {
                label: '🎬 ngOnChanges',
                routerLink: '/ng-onchanges',
              },
            ],
          },
        ],
      },
    ];
  }
}
