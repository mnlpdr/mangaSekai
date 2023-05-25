import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaListComponent} from "./manga/manga-list/manga-list.component";
import {AddMangaComponent} from "./manga/add-manga/add-manga.component";

const routes: Routes = [
  {
    path: "manga",
    component: MangaListComponent
  },
  {
    path: "manga/cadastrar",
    component: AddMangaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
