import { Component, Input } from '@angular/core';

export interface ServiceContent {
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
  @Input() content!: ServiceContent;
  @Input() index!: number; //
}