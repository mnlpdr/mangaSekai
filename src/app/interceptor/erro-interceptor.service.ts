import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensageService } from '../shared/service/mensage.service';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ErroInterceptorService implements HttpInterceptor {
  constructor(private messageService: MensageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {}),
      catchError(response => this.processErrorResponse(response))
    )
  }
  processErrorResponse(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.messageService.error(response.message, 'Error');
    return throwError(response);
    
  }


}
