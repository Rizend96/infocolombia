import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AdminComponent} from "./admin.component";
import {AdminPageRoutingModule} from "./admin-routing.module";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    NgZorroAntdModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminComponent],
  exports: []
})

export class AdminPageModule {}
