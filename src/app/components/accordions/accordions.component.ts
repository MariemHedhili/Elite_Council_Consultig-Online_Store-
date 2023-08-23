import { Component } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css']
})
export class AccordionsComponent {
accordionItems = [
  {
    title: 'Accordion 1',
    description: 'Description for Accordion 1',
    open: false
  },
  {
    title: 'Accordion 2',
    description: 'Description for Accordion 2',
    open: false
  },
  {
    title: 'Accordion 3',
    description: 'Description for Accordion 3',
    open: false
  }
];

toggleAccordion(index: number) {
  this.accordionItems[index].open = !this.accordionItems[index].open;
}
}