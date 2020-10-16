
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NewsPageRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    NgZorroAntdModule,
    NewsPageRoutingModule
  ],
  declarations: [NewsComponent],
  exports: []

})

export class NewsPageModule {}
