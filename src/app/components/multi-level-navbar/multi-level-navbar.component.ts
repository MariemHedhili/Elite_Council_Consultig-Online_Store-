import { ChangeDetectorRef, Component } from '@angular/core';
import { DarkModeService } from 'src/app/our-services/dark-mode.service';
import { ScrollService } from 'src/app/scroll.service';

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
  isMobileMenuOpen = false;
  isNavbarExpanded = false;

  links: Link[] = [
    {
      name: 'Accueil',
      routerLink: '/',
      subLinks: [],
      isOpen: false,
    },
    {
      name: 'Nos Solutions',
      routerLink: '',
      subLinks: [
        {
          name: 'Consulting Technologique',
          routerLink: 'Consulting-Technologique',
          subLinks: [],
          isOpen: false,
        },
        {
          name: 'Solutions Techniques',
          routerLink: 'Solutions-Techniques',
          subLinks: [
            {
              name: 'Solutions Materielles',
              routerLink: 'Solutions-Materielles',
              subLinks: [],
              isOpen: false,
            },
            {
              name: 'Solutions Logicielles',
              routerLink: 'Solutions-Logicielles',
              subLinks: [],
              isOpen: false,
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      name: 'À Propos',
      routerLink: 'About',
      subLinks: [],
      isOpen: false,
    },
    {
      name: 'Contactez-Nous',
      routerLink: 'Contact',
      subLinks: [],
      isOpen: false,
    },
  ];

  constructor(
    private scrollService: ScrollService,
    private darkModeService: DarkModeService,
    private cdr: ChangeDetectorRef
  ) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
    if (link.isOpen) {
      this.closeOtherSubLinks(link, this.links);
    }
  }

  closeOtherSubLinks(linkToKeepOpen: Link, linksArray: Link[]): void {
    linksArray.forEach((link) => {
      if (link !== linkToKeepOpen) {
        link.isOpen = false;
        this.closeOtherSubLinks(linkToKeepOpen, link.subLinks);
      }
    });
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeAllSubLinks(this.links);
  }

  toggleSubDropdown(sublink: Link): void {
    if (this.isMobileMenuOpen) {
      this.closeAllSubLinks(this.links);
      sublink.isOpen = true;
    } else {
      sublink.isOpen = !sublink.isOpen;
    }
  }

  private closeAllSubLinks(linksArray: Link[]): void {
    linksArray.forEach((link) => {
      link.isOpen = false;
      this.closeAllSubLinks(link.subLinks);
    });
  }
}
