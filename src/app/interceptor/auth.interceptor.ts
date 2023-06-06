import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes("login") || !req.url.includes("cadastrar")) {
            req = req.clone({
                setHeaders: {
                    'Autorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            return next.handle(req);

        }
        return next.handle(req);  
    }
}  