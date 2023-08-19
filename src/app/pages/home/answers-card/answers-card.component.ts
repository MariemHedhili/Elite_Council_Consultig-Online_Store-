import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-answers-card',
  templateUrl: './answers-card.component.html',
})
export class AnswersCardComponent implements OnInit {
  @Input() card: { title: string; description: string; img: string } = { title: '', description: '', img: '' };
  safeSvg!: SafeHtml; // Initialized in ngOnInit

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.card.img);
  }
}
