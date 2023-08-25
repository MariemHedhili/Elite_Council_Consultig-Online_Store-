import { Component } from '@angular/core';

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['./vps.component.css']
})
export class VpsComponent {
  pricingPlans = [
    {
      title: 'VPS Basic',
      storage: '50 Go SSD',
      ram: '4 Go',
      processor: '2 vCPU',
      traffic: 'Illimité',
      support: 'Standard',
      price: 60
    },
    {
      title: 'VPS Plus',
      storage: '100 Go SSD',
      ram: '8 Go',
      processor: '4 vCPU',
      traffic: 'Illimité',
      support: 'Premium (24/7)',
      price: 100
    },
    {
      title: 'VPS Pro',
      storage: '200 Go SSD',
      ram: '16 Go',
      processor: '6 vCPU',
      traffic: 'Illimité',
      support: 'Premium (24/7)',
      price: 150
    },
  ];
}
