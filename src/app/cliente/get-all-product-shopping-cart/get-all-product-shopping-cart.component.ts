import { Component, OnInit } from '@angular/core';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';
import { MangaView } from 'src/app/shared/models/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';
import { ClientFirestoreService } from 'src/app/shared/service/firestore/client-firestore.service';
import { MensageService } from 'src/app/shared/service/mensage.service';

@Component({
  selector: 'app-get-all-product-shopping-cart',
  templateUrl: './get-all-product-shopping-cart.component.html',
  styleUrls: ['./get-all-product-shopping-cart.component.css']
})
export class GetAllProductShoppingCartComponent implements OnInit{

  mangas: Array<MangaViewFirestore> = new Array<MangaViewFirestore>();
  purchaseTotal = 0;
  purchase = true;

  constructor(private clientService: ClientFirestoreService, private messageService: MensageService) { }

  ngOnInit(): void {
    this.fetchAllProductShoppingCart();
    this.priceTotal();

  }

  priceTotal() {
    this.purchaseTotal = this.mangas.reduce((acc, manga) => acc + (manga.price || 0), 0);
    if (this.purchaseTotal > 0) {
      this.purchase = false;
    }
  }

  fetchAllProductShoppingCart() {
    const id = localStorage.getItem('client') || "";
    this.clientService.getAllProductShoppingCart(id).subscribe(
      data => {
        console.log(data)
        this.mangas = data;
        this.priceTotal();
      }
    );
  }
  
  deleteProductShoppingCart(id: string) {
    const idClient: string = localStorage.getItem('client') || "";
    this.clientService.deleteProductShoppingCart(idClient, id).subscribe(
      data => {
        this.messageService.success('Produto removido do carrinho', 'Sucesso');
        const index = this.mangas.findIndex(manga => manga.id === id);
        this.mangas.splice(index, 1);
        this.priceTotal();
      }
    );
  }
  checkout() {
    const idClient: string = localStorage.getItem('client') || "";
    this.mangas.forEach((manga, index) => {
      this.clientService.addProductToCheckout(idClient, manga).subscribe(
        data => {
          this.messageService.success('Compra realizada com sucesso', 'Sucesso');

          console.log(data);
          this.mangas.splice(index, 1);
          this.priceTotal();
        }
      );
    });
  }
}
