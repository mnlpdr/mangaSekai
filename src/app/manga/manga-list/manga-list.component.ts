import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../shared/service/manga.service';
import { Manga } from '../../shared/models/manga.model';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Array<Manga> = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.mangaService.getMangas().subscribe((data) => {
      console.log(data);
      this.mangas = data;
    });
  }
  deleteManga(manga: Manga): void {
    if (manga.id) {
      this.mangaService.deleteManga(manga.id).subscribe(() => {
        this.mangas = this.mangas.filter((m) => m.id !== manga.id);
      });
    }
  }
}
