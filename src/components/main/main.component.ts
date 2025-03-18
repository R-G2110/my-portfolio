import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoaderComponent } from '../partials/loader/loader.component';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    LoaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  loading: boolean = false;
  private navigationStartTime: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.navigationStartTime = Date.now();
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        const elapsed = Date.now() - this.navigationStartTime;
        const delay = Math.max(500 - elapsed, 0);
        setTimeout(() => {
          this.loading = false;
        }, delay);
      }
    });
  }

}
