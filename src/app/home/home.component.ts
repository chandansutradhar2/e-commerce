import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  title = 'e-commerce';
  constructor() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: 'dashboard',
      },
      {
        label: 'Login',
        expanded: false,
        routerLink: 'login',
      },
    ];
  }

  ngOnInit(): void {}
}
