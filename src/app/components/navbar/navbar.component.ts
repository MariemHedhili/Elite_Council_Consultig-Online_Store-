import { ChangeDetectorRef, Component } from '@angular/core';
import { DarkModeService } from '../../our-services/dark-mode.service';
import { ScrollService } from 'src/app/scroll.service';

interface Link {
  name: string;
  routerLink: string;
  subLinks: Link[];
  isOpen: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMobileMenuOpen = false;

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
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    console.log(this.darkModeService.darkMode$);
    this.cdr.detectChanges();
  }

  toggleMobileDropdown(link: Link): void {
    link.isOpen = !link.isOpen;
    this.closeOtherSubLinks(link, this.links);
  }

  toggleSubDropdown(sublink: Link): void {
    sublink.isOpen = !sublink.isOpen;
    this.closeOtherSubLinks(sublink, this.links);
  }

  toggleSubSubDropdown(subsublink: Link): void {
    subsublink.isOpen = !subsublink.isOpen;
    this.closeOtherSubLinks(subsublink, this.links);
  }

  private closeOtherSubLinks(linkToKeepOpen: Link, linksArray: Link[]): void {
    linksArray.forEach((link) => {
      if (link !== linkToKeepOpen) {
        link.isOpen = false;
        link.subLinks.forEach((sublink) => {
          sublink.isOpen = false;
          sublink.subLinks.forEach((subsublink) => {
            subsublink.isOpen = false;
          });
        });
      }
    });
  }
}
