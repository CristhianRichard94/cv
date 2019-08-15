import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./features/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./features/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./features/about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule)
  },
  // ...
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
