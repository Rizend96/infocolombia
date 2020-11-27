
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import { ReadnewsComponent } from './readnews/readnews.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent],
  exports: []

})

export class PageModule {}
