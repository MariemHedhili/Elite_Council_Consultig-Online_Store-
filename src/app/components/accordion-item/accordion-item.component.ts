import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent {
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}