import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isCollapsed = true;

  constructor(private router: Router) {}

  showMenu(): boolean {
    return this.router.url !== '/user/login' && this.router.url !== '/user/register';
  }
}
