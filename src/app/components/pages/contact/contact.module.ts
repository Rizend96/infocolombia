import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ContactComponent} from './contact.component';
import {ContactPageRoutingModule} from './contact-routing.module';
import {Person} from "../../../models/person";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        LayoutModule,
        NgZorroAntdModule,
        ContactPageRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [ContactComponent],
  exports: []
})

export class ContactPageModule {}
