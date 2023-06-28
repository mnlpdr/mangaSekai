import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpClient } from '../models/client/registerClient.model';
import { SignInClient } from '../models/client/loginClient';
import { Observable } from 'rxjs';
import { Token } from '../models/token/token.model';
import { MangaView } from '../models/manga/mangaView.model';
import { Message } from '../models/message/message.model';
import { LoginResponse } from '../models/loginResponse/loginResponse';
import { ShoppingCart } from '../models/client/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private URL: string = "http://localhost:8080/client";
  constructor(private http: HttpClient) { }

  registerClient(client: SignUpClient){
    return this.http.post(`${this.URL}/register`, client);
  }

  loginClient(email: string, password: string): Observable<LoginResponse> {
    const client = new SignInClient(email, password);
    return this.http.post<LoginResponse>(`${this.URL}/login`, client);
  }

  getAllManga(): Observable<Array<MangaView>> {
    return this.http.get<Array<MangaView>>(`${this.URL}/products`);
  }

//   addShoppingCart(manga: MangaView): Observable<MangaView> {
//     return this.http.post<MangaView>(`${this.URL}/carrinho`, manga);
//   }

  AllProductsShoppingCart(): Observable<ShoppingCart> {
    const id = Number(localStorage.getItem('client'));
    return this.http.get<ShoppingCart>(`${this.URL}/${id}/shoppingCart`);
  }
//   deleteProductShoppingCart(id: string): Observable<Message> {
//     return this.http.delete<Message>(`${this.URL}/carrinho/${id}`);
//   }
//   checkout(mangas: Array<MangaView>): Observable<Message> {
//     return this.http.post<Message>(`${this.URL}/carrinho/comprar`, mangas);
//   }

//   getProductsCheckout(): Observable<Array<MangaView>> {
//     return this.http.get<Array<MangaView>>(`${this.URL}/comprados`);
//   }
}

