import { Component } from '@angular/core';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';
import { ClientFirestoreService } from 'src/app/shared/service/firestore/client-firestore.service';
import { ProductFirestoreService } from 'src/app/shared/service/firestore/product-firestore.service';
import { MensageService } from 'src/app/shared/service/mensage.service';

@Component({
  selector: 'app-manga-list-client',
  templateUrl: './manga-list-client.component.html',
  styleUrls: ['./manga-list-client.component.css']
})
export class MangaListClientComponent {
  mangas: Array<MangaViewFirestore> = Array<MangaViewFirestore>();

  constructor(private clientService: ClientFirestoreService, private mangaService: ProductFirestoreService, private messageService: MensageService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.mangaService.getAllProduct().subscribe((data) => {
      console.log(data);
      this.mangas = data;
    });
  }
  addShoppingCart(manga: MangaViewFirestore): void {
    const idClient: string = localStorage.getItem('client') || "";
    this.clientService.AddProductToShoppingCart(idClient, manga).subscribe(
      (data) => { 
        this.messageService.success('Produto adicionado ao carrinho', 'Sucesso');

        console.log(data);
    });
  }
}
