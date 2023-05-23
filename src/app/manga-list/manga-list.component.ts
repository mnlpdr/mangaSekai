import { Component, OnInit } from '@angular/core';
import { MangaService } from '../manga.service';
import { Manga } from '../models/manga.model';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Manga[] = [];

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.mangaService.getMangas().subscribe((data: any) => {
      this.mangas = data;
    });
  }
}
