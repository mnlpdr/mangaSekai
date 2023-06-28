import { Component, OnInit } from '@angular/core';
import { MangaView } from 'src/app/shared/models/manga/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';
import { MensageService } from 'src/app/shared/service/mensage.service';

@Component({
  selector: 'app-get-all-product-shopping-cart',
  templateUrl: './get-all-product-shopping-cart.component.html',
  styleUrls: ['./get-all-product-shopping-cart.component.css']
})
export class GetAllProductShoppingCartComponent implements OnInit{

  mangas: Array<MangaView> = new Array<MangaView>();
  id: number = 0;
  purchaseTotal = 0;
  purchase = true;

  constructor(private clientService: ClientService, private messageService: MensageService) { }

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
    this.clientService.AllProductsShoppingCart().subscribe(
      data => {
        this.id = data.id;
        this.mangas = data.products;
        this.priceTotal();
      }
    );
  }
  
  deleteProductShoppingCart(id: string) {
    // const idClient: string = localStorage.getItem('client') || "";
    // this.clientService.deleteProductShoppingCart(idClient, id).subscribe(
    //   data => {
    //     this.messageService.success('Produto removido do carrinho', 'Sucesso');
    //     const index = this.mangas.findIndex(manga => manga.id === id);
    //     this.mangas.splice(index, 1);
    //     this.priceTotal();
    //   }
    // );
  }
  checkout() {
    // const idClient: string = localStorage.getItem('client') || "";
    // this.mangas.forEach((manga, index) => {
    //   this.clientService.addProductToCheckout(idClient, manga).subscribe(
    //     data => {
    //       this.messageService.success('Compra realizada com sucesso', 'Sucesso');

    //       console.log(data);
    //       this.mangas.splice(index, 1);
    //       this.priceTotal();
    //     }
    //   );
    // });
  }
}
