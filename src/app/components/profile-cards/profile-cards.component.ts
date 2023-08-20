import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'; 


export interface Card {
  title: string;
  position: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))])
    ])
  ]
})
export class ProfileCardsComponent implements OnInit {
  currentCardIndex = 0;

  cards: Card[] = [
    {
      title: "Aymen",
      position: "Chief Executive Officer",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: "./../../../assets/Profile1.jpg"
    },
    {
      title: "Jeff",
      position: "Junior Marketing Specialist",
      description: "Results-driven marketing professional with a passion for creating engaging content and implementing data-driven strategies. Proficient in social media management, campaign analytics, and brand development. Seeking opportunities to contribute innovative ideas and drive impactful marketing initiatives.",
      img: "./../../../assets/hero.png"
    },
    {
      title: "Bob",
      position: "Entry-Level Software Developerr",
      description: "Enthusiastic software developer with a solid foundation in programming languages such as Java and Python. Eager to apply problem-solving skills and collaborate with a team to create efficient and user-friendly applications. Open to learning new technologies and contributing to projects that make a positive impact.",
      img: "./../../../assets/hero.png"
    },
    {
      title: "Max",
      position: "Administrative Assistant",
      description: "Organized and detail-oriented administrative professional with experience managing office operations, scheduling appointments, and coordinating travel arrangements. Skilled in communication, time management, and maintaining a welcoming environment. Seeking a role where I can provide seamless administrative support to enhance overall efficiency.      ",
      img: "./../../../assets/hero.png"
    },
    // Add more cards as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prevCard() {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.cards.length) % this.cards.length;
  }

  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
  }
}