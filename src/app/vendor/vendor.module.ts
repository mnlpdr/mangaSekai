import { NgModule } from '@angular/core';
import { ImportsModuleModule } from '../imports-module/imports-module.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    ImportsModuleModule,
  ]
})
export class VendorModule { }
