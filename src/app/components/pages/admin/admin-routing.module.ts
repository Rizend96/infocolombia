import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // children: [{
    //   path: 'panel',
    //   loadChildren: () => import('./admin-panel/admin-panel.component').then(s => s.AdminPanelComponent),
    // }],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class AdminPageRoutingModule {}
