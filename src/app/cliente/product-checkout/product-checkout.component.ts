import { Component, OnInit } from '@angular/core';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';
import { MangaView } from 'src/app/shared/models/manga/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';
import { ClientFirestoreService } from 'src/app/shared/service/firestore/client-firestore.service';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})
export class ProductCheckoutComponent implements OnInit{
  mangas: Array<MangaViewFirestore> = new Array<MangaViewFirestore>();
  checkoutTotal = 0;
  constructor(private clientService: ClientFirestoreService) { }

  ngOnInit(): void {
    this.fetchAllProductCheckout();
    this.totalCheckout();
  }

  totalCheckout() {
    this.checkoutTotal = this.mangas.reduce((acc, manga) => acc + (manga.price || 0), 0);
  }

  fetchAllProductCheckout() {
    const id = localStorage.getItem('client') || "";
    this.clientService.getAllProductCheckout(id).subscribe(
      data => {
        this.mangas = data;
        this.totalCheckout();
      }
    );
  }
}
