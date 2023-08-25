import { Component } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css']
})
export class AccordionsComponent {
accordionItems = [
  {
    title: 'Qu’est ce qui est l’hébergement web?',
    description: "L'hébergement web, également appelé hébergement de site web, est un service quipermet à des individus, des entreprises et d'autres entités de rendre leur site webaccessible sur Internet. En d'autres termes, l'hébergement web fournit un espace enligne où les fichiers, les données et le contenu d'un site web peuvent être stockés etconsultés par les utilisateurs via un navigateur web.",
    open: false
  },
  {
    title: 'Quel est le processus d’hébergement web ?',
    description: "Votre site web est constitué d'une collection de fichiers et, dans la plupart des cas,de bases de données présentées à vos visiteurs lorsqu'ils parcourent votre site. Unfournisseur d'hébergement web alloue un espace de stockage sur un serveur pourles fichiers et les bases de données de votre site web.Lorsque vous vous inscrivez aux services d'hébergement de Elite Council Consulting, vous recevrez les informations de connexion pour accéder au panneaud'administration de votre compte d'hébergement . vous pouvez gérer tout ce quiconcerne votre site web, de l'hébergement aux domaines, aux bases de données, auxfichiers, etc.",
    open: false
  },
  {
    title: 'Quel type de support vais-je recevoir ?',
    description: "Ici chez Elite Council Consulting , l'équipe de support technique est très bien notéedans l'industrie. Nous répondons rapidement et en profondeur et nous ne renonçonspas tant que nous n'avons pas trouvé de solution.Nous faisons le maximum pour nous assurer que nos clients réussissent dans leursprojets en ligne. Donc, si vous rencontrez un problème, n'hésitez pas à nouscontacter. Nous ferons de notre mieux pour résoudre tout problème et vous orienterdans la bonne direction.",
    open: false
  },
  {
    title: 'Quelle est la différence entre hébergement web et undomaine ?',
    description: "L'hébergement web et le nom de domaine sont des éléments essentiels pourconstruire un site web fonctionnel. Un nom de domaine est essentiellement l'adressed'un site web, comme elite.com ; l'hébergement est un service qui stocke les fichiersdu site et les rend disponibles sur Internet.Sans les noms de domaine, les gens devraient mémoriser les adresses IP pourvisiter des sites web. Ensuite, sans les plans d'hébergement de site web, vousdevriez configurer votre ordinateur pour agir en tant que serveur.",
    open: false
  },
  {
    title: "J'ai un site web. Est-ce que je peux le transférer versElite Council Consulting ?",
    description: "Oui, vous pouvez transférer votre site web existant vers Elite Council Consulting . Leprocessus de transfert peut varier en fonction de la manière dont votre site web a étécréé et de l'endroit où il est actuellement hébergé.",
    open: false
  },
  {
    title: "Ai-je besoin de connaissances techniques pourutiliser Elite Council Consulting ?",
    description: "Non, vous n'avez pas besoin de connaissances techniques avancées pour utiliserElite Council Consulting. Elite Council Consulting propose une interface conviviale etdes outils simples qui conviennent aussi bien aux débutants qu'aux utilisateurs plusexpérimentés.",
    open: false
  },
];

toggleAccordion(index: number) {
  this.accordionItems[index].open = !this.accordionItems[index].open;
}
}