import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-solutions-logicielles',
  templateUrl: './solutions-logicielles.component.html',
  styleUrls: ['./solutions-logicielles.component.css'],
  
})
export class SolutionsLogiciellesComponent {
  activePosition: number = 0; // Default active position

  togglePosition() {
    this.activePosition = (this.activePosition + 1) % 3;
  }
}