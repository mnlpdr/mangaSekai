import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Manga} from "../models/manga.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class MangaService {
  constructor(private http: HttpClient) { }

  addManga(manga: Manga): Observable<Manga> {
    return this.http.post<Manga>('http://localhost:3000/mangas', manga);
  }
  getMangas(): Observable<Array<Manga>> {
    return this.http.get<Array<Manga>>('http://localhost:3000/mangas');
  }
}
