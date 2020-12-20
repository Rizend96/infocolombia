import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AdminPanelComponent} from "./admin-panel.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {LayoutModule} from "../../../shared/layout/layout.module";
import {CreateNoticesComponent} from "./create-notices/create-notices.component";
import { ModifyNewsComponent } from './modify-news/modify-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    NgZorroAntdModule,
    AdminPanelRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminPanelComponent,CreateNoticesComponent, ModifyNewsComponent, DeleteNewsComponent],
  exports: []
})

export class AdminPanelPageModule {}
