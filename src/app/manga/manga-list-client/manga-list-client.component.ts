import { Component } from '@angular/core';
import { MangaView } from 'src/app/shared/models/manga/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';

import { MensageService } from 'src/app/shared/service/mensage.service';

@Component({
  selector: 'app-manga-list-client',
  templateUrl: './manga-list-client.component.html',
  styleUrls: ['./manga-list-client.component.css']
})
export class MangaListClientComponent {
  mangas: Array<MangaView> = Array<MangaView>();
  //private mangaService: ProductFirestoreService
  constructor(private clientService: ClientService, private messageService: MensageService,  ) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.clientService.getAllManga().subscribe((data) => {
      console.log(data);
      this.mangas = data;
    });
  }
   addShoppingCart(manga: any): void {
  //   const idClient: string = localStorage.getItem('client') || "";
  //   this.clientService.AddProductToShoppingCart(idClient, manga).subscribe(
  //     (data) => { 
  //       this.messageService.success('Produto adicionado ao carrinho', 'Sucesso');

  //       console.log(data);
  //   });
  }
}
