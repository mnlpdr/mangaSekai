import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ImportsModuleModule } from '../imports-module/imports-module.module';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuClienteComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ImportsModuleModule,
  ]
})
export class MenuModule { }
