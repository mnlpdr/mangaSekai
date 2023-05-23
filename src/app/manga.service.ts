import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MangaService {
  constructor(private http: HttpClient) { }

  addManga(name: string, author: string, publication: string, chapter: string, genre: string) {
    const manga = { name, author, publication, chapter, genre };
    this.http.post('http://localhost:3000/mangas', manga).subscribe(responseData => {
      console.log(responseData);
    });
  }


  getMangas() {
    return this.http.get('http://localhost:3000/mangas');
  }
}
