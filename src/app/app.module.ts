import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MangaModule} from "./manga/manga.module";
import { MenuModule} from "./menu/menu.module";
import { CurrencyPipe, registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt';
import { ImportsModuleModule } from './imports-module/imports-module.module';
import { VendorModule } from './vendor/vendor.module';
import { ClienteModule } from './cliente/cliente.module';
import {InterceptorModule} from './interceptor/interceptor.module';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
