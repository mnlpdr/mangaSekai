import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Manga } from 'src/app/shared/models/manga.model';
import { MangaService } from 'src/app/shared/service/manga.service';

@Component({
  selector: 'app-manga-vendidos',
  templateUrl: './manga-vendidos.component.html',
  styleUrls: ['./manga-vendidos.component.css']
})
export class MangaVendidosComponent {
  dataSource: MatTableDataSource<Manga>;
  displayedColumns: string[] = ['name', 'chapter', 'price'];
  constructor(private mangaService: MangaService) {
    this.dataSource = new MatTableDataSource();
    this.mangaService.getMangaSold().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
