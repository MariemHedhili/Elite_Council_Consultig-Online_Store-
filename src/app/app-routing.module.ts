import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsultingTechnologiqueComponent } from './pages/consulting-technologique/consulting-technologique.component';
import { SolutionsTechniquesComponent } from './pages/solutions-techniques/solutions-techniques.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Consulting-Technologique',
    component: ConsultingTechnologiqueComponent
  },
  {
    path: 'Solutions-Techniques',
    component: SolutionsTechniquesComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
