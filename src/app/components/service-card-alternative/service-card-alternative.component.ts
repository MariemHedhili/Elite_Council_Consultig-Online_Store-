import { Component, Input } from '@angular/core';

interface ServiceContent {
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-service-card-alternative',
  templateUrl: './service-card-alternative.component.html'
})
export class ServiceCardAlternativeComponent {
  @Input() content!: ServiceContent;
  @Input() index!: number; // Define the index input property
}