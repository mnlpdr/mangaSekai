import { Component, OnInit } from '@angular/core';
import { MangaView } from 'src/app/shared/models/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-get-all-product-shopping-cart',
  templateUrl: './get-all-product-shopping-cart.component.html',
  styleUrls: ['./get-all-product-shopping-cart.component.css']
})
export class GetAllProductShoppingCartComponent implements OnInit{

  mangas: Array<MangaView> = new Array<MangaView>();
  purchaseTotal = 0;
  purchase = true;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.fetchAllProductShoppingCart();
    this.priceTotal();

  }

  priceTotal() {
    this.purchaseTotal = this.mangas.reduce((acc, manga) => acc + manga.price, 0);
    if (this.purchaseTotal > 0) {
      this.purchase = false;
    }
  }

  fetchAllProductShoppingCart() {
    this.clientService.AllProductsShoppingCart().subscribe(
      data => {
        console.log(data)
        this.mangas = data;
        this.priceTotal();
      }
    );
  }
  
  deleteProductShoppingCart(id: string) {
    this.clientService.deleteProductShoppingCart(id).subscribe(
      data => {
        const index = this.mangas.findIndex(manga => manga.id === id);
        this.mangas.splice(index, 1);
        this.priceTotal();
      }
    );
  }
  checkout() {
    this.clientService.checkout(this.mangas).subscribe(
      data => {
        console.log(data);
        this.mangas = [];
        this.priceTotal();
      }
    );
  }
}
