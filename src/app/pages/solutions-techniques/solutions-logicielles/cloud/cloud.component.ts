import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent {
  pricingPlans = [
    {
      title: 'Cloud Basic',
      storage: '20 Go SSD',
      ram: '2 Go',
      processor: '1 vCPU',
      traffic: 'Illimité',
      support: 'Standard',
      price: 25
    },
    {
      title: 'Cloud Plus',
      storage: '50 Go SSD',
      ram: '4 Go',
      processor: '2 vCPU',
      traffic: 'Illimité',
      support: 'Premium (24/7)',
      price: 45
    },{
      title: 'Cloud Pro',
      storage: '100 Go SSD',
      ram: '8 Go',
      processor: '4 vCPU',
      traffic: 'Illimité',
      support: 'Premium (24/7)',
      certificat_ssl: "Inclus",
      price: 75
    },
  ];
}
