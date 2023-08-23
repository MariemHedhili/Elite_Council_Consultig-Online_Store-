import { Component } from '@angular/core';
import { ScrollService } from './scroll.service';
import { DarkModeService } from './our-services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private scrollService: ScrollService, public darkModeService: DarkModeService) {}
  title = 'ECChosting';
}
