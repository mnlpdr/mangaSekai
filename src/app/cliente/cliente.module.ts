import { NgModule } from '@angular/core';
import { ImportsModuleModule } from '../imports-module/imports-module.module';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { GetAllProductShoppingCartComponent } from './get-all-product-shopping-cart/get-all-product-shopping-cart.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';



@NgModule({
  declarations: [
    CadastrarClienteComponent,
    LoginClienteComponent,
    GetAllProductShoppingCartComponent,
    ProductCheckoutComponent,


  ],
  imports: [
    ImportsModuleModule

  ]
})
export class ClienteModule { }
