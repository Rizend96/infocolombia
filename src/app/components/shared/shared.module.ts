import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';

registerLocaleData(en);

@NgModule({
  declarations: [
  ],
  exports: [
    LayoutModule,
    ModalModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    ModalModule,
  ],
  providers: [],
})
export class SharedModule { }
