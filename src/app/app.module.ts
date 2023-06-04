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
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    MangaModule,
    MenuModule,
    ImportsModuleModule

  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
