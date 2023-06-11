import { Component } from '@angular/core';
import { MangaView } from 'src/app/shared/models/mangaView.model';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-manga-list-client',
  templateUrl: './manga-list-client.component.html',
  styleUrls: ['./manga-list-client.component.css']
})
export class MangaListClientComponent {
  mangas: Array<MangaView> = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.fetchMangas();
  }

  fetchMangas(): void {
    this.clientService.getAllManga().subscribe((data) => {
      console.log(data);
      this.mangas = data;
    });
  }
  addShoppingCart(manga: MangaView): void {
    this.clientService.addShoppingCart(manga).subscribe(
      (data) => { 
        console.log(data);
    });
  }
}
