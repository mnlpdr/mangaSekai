import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/shared/models/manga/manga.model';
import { MensageService } from 'src/app/shared/service/mensage.service';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Array<Manga> = [];

  constructor(private VendorService: VendorService, private messageService: MensageService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.VendorService.getMangas().subscribe((data) => {
      console.log(data);
      this.mangas = data;
    });
  }
  
  deleteManga(manga: Manga): void {
    if (manga.id) {
      this.VendorService.deleteManga(manga.id).subscribe(() => {
        this.messageService.success('Manga deletado com sucesso', 'Sucesso');
        this.mangas = this.mangas.filter((m) => m.id !== manga.id);
      });
    }
  }
}
