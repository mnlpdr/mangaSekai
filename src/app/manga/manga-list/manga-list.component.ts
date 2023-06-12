import { Component, OnInit } from '@angular/core';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';
import { ProductFirestoreService } from 'src/app/shared/service/firestore/product-firestore.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {
  mangas: Array<MangaViewFirestore> = [];

  constructor(private mangaService: ProductFirestoreService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    const id: string | null = localStorage.getItem('id');
    if (id) {
      this.mangaService.getProductOfVendor(id).subscribe((data) => {
        console.log(data);
        this.mangas = data;
      });
    }
  }
  deleteManga(manga: MangaViewFirestore): void {
    if (manga.id) {
      this.mangaService.deleteProduct(manga.id).subscribe(() => {
        this.mangas = this.mangas.filter((m) => m.id !== manga.id);
      });
    }
  }
}
