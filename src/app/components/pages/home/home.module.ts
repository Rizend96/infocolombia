
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {HomePageRoutingModule} from './home-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    HomePageRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [HomeComponent],
  exports: []

})

export class HomePageModule {}
