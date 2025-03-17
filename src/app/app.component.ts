import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { CustomCursorComponent } from '../components/partials/custom-cursor/custom-cursor.component';

import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
}
