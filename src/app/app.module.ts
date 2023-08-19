import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ConsultingTechnologiqueComponent } from './pages/consulting-technologique/consulting-technologique.component';
import { SolutionsTechniquesComponent } from './pages/solutions-techniques/solutions-techniques.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
import { ServiceCardAlternativeComponent } from './pages/home/service-card-alternative/service-card-alternative.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConsultingTechnologiqueComponent,
    SolutionsTechniquesComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    NotFoundComponent,
    ServicesComponent,
    ServiceCardComponent,
    ServiceCardAlternativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
