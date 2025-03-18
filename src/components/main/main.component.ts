// main.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { LoaderComponent } from '../partials/loader/loader.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, LoaderComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  loading: boolean = false;
  private navigationStartTime: number = 0;

  constructor(private router: Router, private loaderService: LoaderService) {
    // Sottoscrizione agli eventi del router (già presente)
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

    // Sottoscrizione allo stato di loading dal LoaderService
    this.loaderService.loading$.subscribe(loading => {
      this.loading = loading;
    });
  }
}
