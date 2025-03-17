import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { PROJECTS } from '../../../data/constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Aggiungi qui
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;

  constructor() {}

  ngOnInit() {}
}
