import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  title = 'e-commerce';
  constructor(private stateSvc: StateService) {
    this.stateSvc.user
      ? (this.items = [
          {
            label: 'Dashboard',
            routerLink: 'dashboard',
          },
          {
            label: 'Admin Panel',
            expanded: false,
            routerLink: 'admin',
          },
        ])
      : (this.items = [
          {
            label: 'Dashboard',
            routerLink: 'dashboard',
          },
          {
            label: 'Login',
            expanded: false,
            routerLink: 'auth',
          },
          {
            label: 'Register',
            expanded: false,
            routerLink: 'auth',
          },
          {
            label: 'Admin Panel',
            expanded: false,
            routerLink: 'admin',
          },
        ]);
  }

  ngOnInit(): void {}
}
