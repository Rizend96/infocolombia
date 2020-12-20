import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPanelComponent} from "./admin-panel.component";
import {CreateNoticesComponent} from "./create-notices/create-notices.component";
import {ModifyNewsComponent} from "./modify-news/modify-news.component";
import {DeleteNewsComponent} from "./delete-news/delete-news.component";


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
      path: 'createnotice',
      component: CreateNoticesComponent
      },
      {
        path: 'updatenotice',
        component: ModifyNewsComponent
      },
      {
        path: 'deletenotice',
        component: DeleteNewsComponent
      },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class AdminPanelRoutingModule {}
