import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErroInterceptorService } from './erro-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErroInterceptorService,
      multi: true,
    }
  ]
})
export class InterceptorModule { }
