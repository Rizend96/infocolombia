import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ContactComponent} from './contact.component';
import {ContactPageRoutingModule} from './contact-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LayoutModule,
    NgZorroAntdModule,
    ContactPageRoutingModule,
  ],
  declarations: [ContactComponent],
  exports: []
})

export class ContactPageModule {}
