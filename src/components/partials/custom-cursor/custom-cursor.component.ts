import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.css'],
})
export class CustomCursorComponent {
  transformValue: string = 'translate(-8px, -8px) scale(1) rotate(0deg)';
  rotationAngle: number = 0;

  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // Ottieni la posizione del mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Ottieni il cursore (il div custom)
    const cursor = document.querySelector('.cursor') as HTMLElement;

    // Calcola l'angolo di rotazione tra il cursore e il punto centrale dello schermo
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    this.rotationAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convertito in gradi

    // Imposta la trasformazione per il cursore
    this.transformValue = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(1) rotate(${this.rotationAngle}deg)`;

    // Applicare la trasformazione al cursore
    if (cursor) {
      this.renderer.setStyle(cursor, 'transform', this.transformValue);
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      this.renderer.setStyle(cursor, 'transform', 'translate(-8px, -8px) scale(1) rotate(0deg)');
    }
  }

  @HostListener('document:mouseenter')
  onMouseEnter(): void {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      this.renderer.setStyle(cursor, 'transform', 'translate(-8px, -8px) scale(1) rotate(0deg)');
    }
  }
}
