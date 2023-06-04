import { NgModule } from '@angular/core';
import { MangaListComponent } from './manga-list/manga-list.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { MangaVendidosComponent } from './manga-vendidos/manga-vendidos.component';
import { ImportsModuleModule } from '../imports-module/imports-module.module';



@NgModule({
  declarations: [
    MangaListComponent,
    AddMangaComponent,
    MangaVendidosComponent
  ],
  imports: [
    ImportsModuleModule
    
  ],
  exports: [
    MangaListComponent,
    AddMangaComponent,
    MangaVendidosComponent

  ]
})
export class MangaModule { }
