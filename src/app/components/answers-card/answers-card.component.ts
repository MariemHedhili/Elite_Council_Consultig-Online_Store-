import { Component, Input, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-answers-card',
  templateUrl: './answers-card.component.html',
})
export class AnswersCardComponent {
  @Input() card: { title: string; description: string; img: string } = { title: '', description: '', img: '' };
  isVisible = false;
  @Input() cardIndex: number = 0;
  safeSvg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const element = document.getElementById(`card-${this.cardIndex}`);

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const cardTop = yOffset + window.innerHeight * 0.8;

      this.isVisible = elementTop < cardTop;
    }
  }

  ngOnInit() {
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.card.img);
  }
}