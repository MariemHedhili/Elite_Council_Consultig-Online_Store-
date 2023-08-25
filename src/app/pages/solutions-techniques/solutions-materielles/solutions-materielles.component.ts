import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions-materielles',
  templateUrl: './solutions-materielles.component.html',
  styleUrls: ['./solutions-materielles.component.css']
})
export class SolutionsMateriellesComponent {
  activePosition: number = 0; // Default active position

  togglePosition() {
    this.activePosition = (this.activePosition + 1) % 3;
  }
}
