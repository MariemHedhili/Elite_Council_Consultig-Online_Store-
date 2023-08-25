import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsultingTechnologiqueComponent } from './pages/consulting-technologique/consulting-technologique.component';
import { SolutionsTechniquesComponent } from './pages/solutions-techniques/solutions-techniques.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SolutionsMateriellesComponent } from './pages/solutions-techniques/solutions-materielles/solutions-materielles.component';
import { SolutionsLogiciellesComponent } from './pages/solutions-techniques/solutions-logicielles/solutions-logicielles.component';

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
    path: 'Solutions-Logicielles',
    component: SolutionsLogiciellesComponent
  },
  {
    path: 'Solutions-Materielles',
    component: SolutionsMateriellesComponent
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
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      
    ]
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
