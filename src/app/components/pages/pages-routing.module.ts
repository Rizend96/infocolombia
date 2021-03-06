import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';




const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'noticias',
        loadChildren: () => import('./news/news.module').then(l => l.NewsPageModule),
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contact/contact.module').then(n => n.ContactPageModule),
      },
      {
        path: 'leermas/:code',
        loadChildren: () => import('./readnews/readnews.module').then(s => s.ReadNewsPageModule),

      },
      {
         path: 'admin',
         loadChildren: () => import('./admin/admin.module').then(s => s.AdminPageModule),
       },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
