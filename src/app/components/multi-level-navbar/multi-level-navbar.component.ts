import { Component } from '@angular/core';

interface Link {
  name: string;
  routerLink: string;
  subLinks: Link[];
  isOpen: boolean;
}

@Component({
  selector: 'app-multi-level-navbar',
  templateUrl: './multi-level-navbar.component.html',
  styleUrls: ['./multi-level-navbar.component.css']
})
export class MultiLevelNavbarComponent {
  links: Link[] = [
    {
      name: 'Home',
      routerLink: '/home',
      subLinks: [],
      isOpen: false
    },
    {
      name: 'Products',
      routerLink: '/products',
      subLinks: [
        {
          name: 'Product 1',
          routerLink: '/products/1',
          subLinks: [],
          isOpen: false
        },
        {
          name: 'Product 2',
          routerLink: '/products/2',
          subLinks: [
            {
              name: 'Subproduct A',
              routerLink: '/products/2/subproduct-a',
              subLinks: [],
              isOpen: false
            },
            {
              name: 'Subproduct B',
              routerLink: '/products/2/subproduct-b',
              subLinks: [],
              isOpen: false
            }
          ],
          isOpen: false
        }
      ],
      isOpen: false
    }
  ];

  toggleDropdown(link: Link, open: boolean): void {
    link.isOpen = open;
  }
}
