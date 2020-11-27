import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReadnewsPageRoutingModule} from "./readnews-routing.module";
import {ReadnewsComponent} from "./readnews.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    ReadnewsPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [ReadnewsComponent],
  exports: []

})

export class ReadNewsPageModule {}
