import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Manga} from "../models/manga.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class MangaService {
  URL: string = 'http://localhost:3000/vendor/produto';
  constructor(private http: HttpClient) { }

  addManga(manga: Manga): Observable<Manga> {
    return this.http.post<Manga>(`${this.URL}/cadastrar`, manga);
  }
  getMangas(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>('http://localhost:3000/mangas');
  }

  getManga(id: number): Observable<Manga> {
    return this.http.get<Manga>(`http://localhost:3000/mangas/${id}`);
  }
  updateManga(manga: Manga): Observable<Manga> {
    return this.http.put<Manga>(`${this.URL}/editar/${manga.id}`, manga);
  }
  deleteManga(id: number): Observable<Manga> {
    return this.http.delete<Manga>(`${this.URL}/deletar/${id}`);
  }
  getMangaSold(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>('http://localhost:3000/mangaSold');
  }
}

