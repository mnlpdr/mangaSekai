import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaListComponent} from "./manga/manga-list/manga-list.component";
import {AddMangaComponent} from "./manga/add-manga/add-manga.component";
import { MangaVendidosComponent } from './manga/manga-vendidos/manga-vendidos.component';

const routes: Routes = [
  {
    path: "manga",
    component: MangaListComponent
  },
  {
    path: "manga/cadastrar",
    component: AddMangaComponent
  },
  {
    path: "manga/editar/:id",
    component: AddMangaComponent
  },
  {
    path: "manga/vendidos",
    component: MangaVendidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
