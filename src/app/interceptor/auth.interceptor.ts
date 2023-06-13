import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url);

        if (!req.url.includes("login") || !req.url.includes("cadastrar")) {
            console.log("entrou NO IF");
            req = req.clone({
                setHeaders: {
                    'Autorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            console.log(req.headers);
            return next.handle(req);

        }
        return next.handle(req);  
    }
}  