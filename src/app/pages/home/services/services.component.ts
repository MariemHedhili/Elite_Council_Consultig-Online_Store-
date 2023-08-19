import { Component } from '@angular/core';
import { ServiceContent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  serviceContents: ServiceContent[] = [
    {
      title: 'test 1',
      description: 'Service 1 Description',
      img: './../../../../assets/hero.png',
    },
    {
      title: 'test 2',
      description: 'Service 2 Description',
      img: './../../../../assets/hero.png',
    },
    // ... more service objects
  ];
}