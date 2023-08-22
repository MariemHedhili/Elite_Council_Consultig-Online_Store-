import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styles: [],
})
export class ScrollButtonComponent {
  isTop: boolean = true;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isTop = window.scrollY === 0;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
