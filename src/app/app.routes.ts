import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { AboutComponent } from '../components/pages/about/about.component';
import { SkillsComponent } from '../components/pages/skills/skills.component';
import { ProjectsComponent } from '../components/pages/projects/projects.component';
import { ContactsComponent } from '../components/pages/contacts/contacts.component';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
