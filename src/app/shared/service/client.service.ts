import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpClient } from '../models/registerClient.model';
import { SignInClient } from '../models/loginClient';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';
import { MangaView } from '../models/mangaView.model';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private URL: string = "http://localhost:8000/cliente";
  constructor(private http: HttpClient) { }

  registerClient(client: SignUpClient){
    return this.http.post(`${this.URL}/cadastrar`, client);
  }

  loginClient(client: SignInClient): Observable<Token> {
    return this.http.post<Token>(`${this.URL}/login`, client);
  }

  getAllManga(): Observable<Array<MangaView>> {
    return this.http.get<Array<MangaView>>(`${this.URL}/produto`);
  }

  addShoppingCart(manga: MangaView): Observable<MangaView> {
    return this.http.post<MangaView>(`${this.URL}/carrinho`, manga);
  }

  AllProductsShoppingCart(): Observable<Array<MangaView>> {
    return this.http.get<Array<MangaView>>(`${this.URL}/carrinho`);
  }
  deleteProductShoppingCart(id: string): Observable<Message> {
    return this.http.delete<Message>(`${this.URL}/carrinho/${id}`);
  }
  checkout(mangas: Array<MangaView>): Observable<Message> {
    return this.http.post<Message>(`${this.URL}/carrinho/comprar`, mangas);
  }

  getProductsCheckout(): Observable<Array<MangaView>> {
    return this.http.get<Array<MangaView>>(`${this.URL}/comprados`);
  }
}

