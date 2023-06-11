import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MangaModule} from "./manga/manga.module";
import { MenuModule} from "./menu/menu.module";
import { CurrencyPipe } from '@angular/common'
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ImportsModuleModule } from './imports-module/imports-module.module';
import { VendorModule } from './vendor/vendor.module';
import { ClienteModule } from './cliente/cliente.module';
import {InterceptorModule} from './interceptor/interceptor.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseConfig } from './firebase.config';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    AppRoutingModule,
    MenuModule,
    ImportsModuleModule,
    VendorModule,
    InterceptorModule,
    ClienteModule,
    MangaModule
    

  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: FIREBASE_OPTIONS, useValue: FirebaseConfig.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
