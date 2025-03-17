import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../../data/constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Aggiungi CommonModule qui
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = SKILLS

  constructor() { }

  ngOnInit() {
  }
}
