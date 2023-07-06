import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/shared/models/manga/manga.model';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})
export class ProductCheckoutComponent implements OnInit{
  mangas: Array<Manga> = new Array<Manga>();
  checkoutTotal = 0;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.fetchAllProductCheckout();
    this.totalCheckout();
  }

  totalCheckout() {
    this.checkoutTotal = this.mangas.reduce((acc, manga) => acc + (manga.price || 0), 0);
  }

  fetchAllProductCheckout() {
    this.clientService.getProductsCheckout().subscribe(
      data => {
        this.mangas = data;
        this.totalCheckout();
      }
    );
  }
}
