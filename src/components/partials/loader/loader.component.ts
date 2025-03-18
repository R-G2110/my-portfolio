import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // balls = Array(5).fill(0);
  @Input() ballColors: string[] = ['#388E3C', '#4CAF50', '#C8E6C9', '#4CAF50', '#388E3C'];
}


