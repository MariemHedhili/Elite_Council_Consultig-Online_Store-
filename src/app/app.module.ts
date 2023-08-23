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
import { HeroComponent } from './components/hero/hero.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { AnswersComponent } from './components/answers/answers.component';
import { AnswersCardComponent } from './components/answers-card/answers-card.component';
import { SolutionsLogiciellesComponent } from './pages/solutions-techniques/solutions-logicielles/solutions-logicielles.component';
import { SolutionsMateriellesComponent } from './pages/solutions-techniques/solutions-materielles/solutions-materielles.component';
import { ProfileCardsComponent } from './components/profile-cards/profile-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { FormsModule } from '@angular/forms';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

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
    AnswersComponent,
    AnswersCardComponent,
    SolutionsLogiciellesComponent,
    SolutionsMateriellesComponent,
    ProfileCardsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ScrollButtonComponent,
    DarkModeToggleComponent,
    AccordionsComponent,
    AccordionItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }