import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/our-services/dark-mode.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(public darkModeService: DarkModeService) {}
  ngOnInit(): void { }

}
