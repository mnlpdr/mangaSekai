import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterVendor } from '../models/registerVendor.model';
import { LoginVendor } from '../models/loginVendor.model';
import { Token } from '../models/token.model';
import { Manga } from '../models/manga.model';
import { Observable } from 'rxjs';
import { MangaView } from '../models/mangaView.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  URL = 'http://localhost:8000/vendedor';

  constructor(private http: HttpClient) { }
  

  registerVendor(vendor: RegisterVendor) {

    return this.http.post(`${this.URL}/cadastrar`, vendor);
  }
  loginVendor(vendor: LoginVendor) {
    return this.http.post<Token>(`${this.URL}/login`,vendor);
  }
  addManga(manga: Manga): Observable<undefined> {
    return this.http.post<undefined>(`${this.URL}/produto/cadastrar`, manga);
  }
  getMangas(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>(`${this.URL}/produto`);
  }

  getManga(id: string): Observable<Manga> {
    return this.http.get<Manga>(`${this.URL}/produto/${id}`);
  }
  updateManga(manga: Manga): Observable<undefined> {
    return this.http.put<undefined>(`${this.URL}/produto/editar/${manga.id}`, manga);
  }
  deleteManga(id: string): Observable<Manga> {
    return this.http.delete<Manga>(`${this.URL}/produto/deletar/${id}`);
  }
  getMangaSold(): Observable<Array<MangaView>> {
    return this.http.get<Array<MangaView>>(`${this.URL}/produto/vendidos`);
  }
}
