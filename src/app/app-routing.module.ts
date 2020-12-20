import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';
import {AdminPanelComponent} from './components/pages/admin/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/pages/pages.module').then(m => m.PageModule),
      },
      {
        path: 'panel',
        loadChildren: () => import('./components/pages/admin/admin-panel/admin-panel.module').then(m => m.AdminPanelPageModule),
      },
    ]
  },
  // {
  //   path: 'adminpanel',
  //   component: AdminPanelComponent,
  // },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false, useHash: true  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
