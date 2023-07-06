import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpClient } from '../models/client/registerClient.model';
import { SignInClient } from '../models/client/loginClient';
import { Observable } from 'rxjs';
import { MangaView } from '../models/manga/mangaView.model';
import { Message } from '../models/message/message.model';
import { LoginResponse } from '../models/loginResponse/loginResponse';
import { ShoppingCart } from '../models/client/shoppingCart';
import { Manga } from '../models/manga/manga.model';

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

  addShoppingCart(manga: Manga): Observable<MangaView> {
    const id = Number(localStorage.getItem('client'));
    return this.http.post<MangaView>(`${this.URL}/${id}/shoppingCart`, manga);
  }

  AllProductsShoppingCart(): Observable<ShoppingCart> {
    const id = Number(localStorage.getItem('client'));
    return this.http.get<ShoppingCart>(`${this.URL}/${id}/shoppingCart`);
  }
  deleteProductShoppingCart(idProduct: number): Observable<Message> {
    const id = Number(localStorage.getItem("shoppingCart"));
    return this.http.delete<Message>(`${this.URL}/shoppingCart/${id}/${idProduct}`);
  }
  checkout(): Observable<Message> {
    const id = Number(localStorage.getItem('shoppingCart'));
    return this.http.post<Message>(`${this.URL}/shoppingCart/${id}/checkout`, undefined);
  }

  getProductsCheckout(): Observable<Array<Manga>> {
    const id = Number(localStorage.getItem('client'));
    return this.http.get<Array<Manga>>(`${this.URL}/${id}/checkouts`);
  }
}

