import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowsScroll(event: Event) {
    const scrollListener =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (scrollListener > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
