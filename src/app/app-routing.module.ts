import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MangaListComponent} from "./manga/manga-list/manga-list.component";
import {AddMangaComponent} from "./manga/add-manga/add-manga.component";
import { MangaVendidosComponent } from './manga/manga-vendidos/manga-vendidos.component';
import { LoginComponent } from './vendor/login/login.component';
import { CadastroComponent } from './vendor/cadastro/cadastro.component';

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
  },
  {
    path: "login/vendedor",
    component: LoginComponent
  },
  {
    path: "cadastro/vendedor",
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
