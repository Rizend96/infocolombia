import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReadnewsComponent} from "./readnews.component";



const routes: Routes = [
  {
    path: '',
    component: ReadnewsComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReadnewsPageRoutingModule {}
