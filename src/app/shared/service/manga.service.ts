import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Manga} from "../models/manga.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class MangaService {
  URL: string = 'http://localhost:8000/vendedor/produto';
  constructor(private http: HttpClient) { }

  addManga(manga: Manga): Observable<undefined> {
    return this.http.post<undefined>(`${this.URL}/cadastrar`, manga);
  }
  getMangas(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>(`${this.URL}`);
  }

  getManga(id: string): Observable<Manga> {
    return this.http.get<Manga>(`${this.URL}/${id}`);
  }
  updateManga(manga: Manga): Observable<undefined> {
    return this.http.put<undefined>(`${this.URL}/editar/${manga.id}`, manga);
  }
  deleteManga(id: string): Observable<Manga> {
    return this.http.delete<Manga>(`${this.URL}/deletar/${id}`);
  }
  getMangaSold(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>('http://localhost:3000/mangaSold');
  }
}

