import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {MangaListComponent} from "./manga/manga-list/manga-list.component";
// import {AddMangaComponent} from "./manga/add-manga/add-manga.component";
// import { MangaVendidosComponent } from './manga/manga-vendidos/manga-vendidos.component';
// import { LoginComponent } from './vendor/login/login.component';
// import { CadastroComponent } from './vendor/cadastro/cadastro.component';
import { CadastrarClienteComponent } from './cliente/cadastrar-cliente/cadastrar-cliente.component';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { MangaListClientComponent } from './manga/manga-list-client/manga-list-client.component';
import { GetAllProductShoppingCartComponent } from './cliente/get-all-product-shopping-cart/get-all-product-shopping-cart.component';
// import { ProductCheckoutComponent } from './cliente/product-checkout/product-checkout.component';

const routes: Routes = [
  // {
  //   path: "manga",
  //   component: MangaListComponent
  // },
  // {
  //   path: "manga/cadastrar",
  //   component: AddMangaComponent
  // },
  // {
  //   path: "manga/editar/:id",
  //   component: AddMangaComponent
  // },
  // {
  //   path: "manga/vendidos",
  //   component: MangaVendidosComponent
  // },
  // {
  //   path: "login/vendedor",
  //   component: LoginComponent
  // },
  // {
  //   path: "cadastro/vendedor",
  //   component: CadastroComponent
  // },
  {
    path: "cadastro/cliente",
    component: CadastrarClienteComponent
  },
  {
    path: "login/cliente",
    component: LoginClienteComponent
  },
  {
    path: "cliente/produto",
    component: MangaListClientComponent
  },
  {
    path: "cliente/carrinho",
    component: GetAllProductShoppingCartComponent
  },
  // {
  //   path: "cliente/checkout",
  //   component: ProductCheckoutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
