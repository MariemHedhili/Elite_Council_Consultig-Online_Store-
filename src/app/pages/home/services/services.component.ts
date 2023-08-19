import { Component } from '@angular/core';
import { ServiceContent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  serviceContents: ServiceContent[] = [
    {
      title: 'Conseil en Technologie - Transformer les Défis en Opportunités',
      description: "Naviguez vers des solutions sur mesure grâce à notre expertise en conseil technologique. Transformons vos défis en opportunités, en développant des stratégies qui stimulent la croissance et le succès.",
      img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" /></svg>',
    },
    {
      title: "Développement Logiciel - Créez l'Extraordinaire",
      description: "Des développeurs talentueux créent des solutions logicielles sur mesure pour répondre à vosbesoins. De la conception à la réalisation, nous catalysons l'innovation et la prospérité.",
      img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" /></svg>',
    },
    {
        title: "Solutions Matérielles - L'Innovation Matérialisée",
        description: "Des microcontrôleurs spécialisés aux télécommunications modernes, nous concevons des solutions matérielles robustes pour vos besoins évolutifs",
        img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" /></svg>',
      },
    {
        title: "Consulting Stratégique - Votre Passage vers la Transformation",
        description: "Notre service de consulting stratégique éclaire votre transformation numérique et amélioration des processus, vous guidant vers le succès.",
        img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" /></svg>',
      },
  ];
}