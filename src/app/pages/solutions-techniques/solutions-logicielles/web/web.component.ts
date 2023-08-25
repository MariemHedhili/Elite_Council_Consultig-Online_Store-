import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})


export class WebComponent {
  pricingPlans = [
    {
      title: 'Pack Starter',
      storage: '10 GB',
      traffic: 'Illimité',
      accounts: '5',
      database: '1',
      support: 'Standard',
      price: 10
    },
    {
      title: 'Pack Business',
      storage: '25 GB',
      traffic: 'Illimité',
      accounts: '10',
      database: '3',
      support: 'Premium (24/7)',
      price: 20
    },
    {
      title: 'Pro Plan',
      storage: '100 GB',
      traffic: 'Unlimited',
      accounts: 'Unlimited',
      database: 'MongoDB',
      support: 'Full',
      certificat_ssl: "Inclus",
      price: 99
    },
  ];
}
