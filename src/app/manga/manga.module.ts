import { NgModule } from '@angular/core';
import { MangaListComponent } from './manga-list/manga-list.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { MangaVendidosComponent } from './manga-vendidos/manga-vendidos.component';
import { ImportsModuleModule } from '../imports-module/imports-module.module';
import { MangaListClientComponent } from './manga-list-client/manga-list-client.component';



@NgModule({
  declarations: [
    MangaListComponent,
    AddMangaComponent,
    MangaVendidosComponent,
    MangaListClientComponent
  ],
  imports: [
    ImportsModuleModule
    
  ],
  exports: [
    MangaListComponent,
    AddMangaComponent,
    MangaVendidosComponent,
    MangaListClientComponent

  ]
})
export class MangaModule { }
