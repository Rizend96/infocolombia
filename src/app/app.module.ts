import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import en from '@angular/common/locales/en';
import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';
import {NotFoundComponent} from './components/shared/not-found/not-found.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LayoutModule} from './components/shared/layout/layout.module';
import {AdminPanelComponent} from "./components/pages/admin/admin-panel/admin-panel.component";



registerLocaleData(localePy, 'es');
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
