import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TYPED_STRINGS } from '../../../data/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  showButton: true | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Typed.js only in the browser environment
      import('typed.js').then(({ default: Typed }) => {
        const options = {
          strings: TYPED_STRINGS,
          typeSpeed: 70,
          backSpeed: 25,
          loop: true
        };
        new Typed(this.typedElement.nativeElement, options);
      });
    }
  }
}
