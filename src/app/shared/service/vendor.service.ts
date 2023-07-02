import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterVendor } from '../models/seiller/registerVendor.model';
import { LoginVendor } from '../models/seiller/loginVendor.model';
import { Manga } from '../models/manga/manga.model';
import { Observable } from 'rxjs';
import { MangaView } from '../models/manga/mangaView.model';
import { LoginResponse } from '../models/loginResponse/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  URL = 'http://localhost:8080/vendor';

  constructor(private http: HttpClient) { }
  

  registerVendor(vendor: RegisterVendor) {

    return this.http.post(`${this.URL}/register`, vendor);
  }
  loginVendor(vendor: LoginVendor) {
    return this.http.post<LoginResponse>(`${this.URL}/login`,vendor);
  }

  getMangas(): Observable<Array<Manga>> {
    const id: number = Number(localStorage.getItem("id"));
    return this.http.get<Array<Manga>>(`${this.URL}/${id}/products`);
  }

  addManga(manga: Manga): Observable<undefined> {
    const id: number = Number(localStorage.getItem("id"));
    return this.http.post<undefined>(`${this.URL}/${id}/product`, manga);
  }
 
  getManga(id: number): Observable<Manga> {
    return this.http.get<Manga>(`${this.URL}/product/${id}`);
  }
  updateManga(manga: Manga): Observable<undefined> {
    return this.http.put<undefined>(`${this.URL}/product`, manga);
  }
  deleteManga(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.URL}/product/${id}`);
  }
  getMangaSold(): Observable<Array<Manga>> {
    const id: number = Number(localStorage.getItem("id"));
    return this.http.get<Array<Manga>>(`${this.URL}/${id}/checkout`);
  }
}
