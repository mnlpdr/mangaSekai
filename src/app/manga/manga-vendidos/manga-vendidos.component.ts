import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Manga } from 'src/app/shared/models/manga/manga.model';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-manga-vendidos',
  templateUrl: './manga-vendidos.component.html',
  styleUrls: ['./manga-vendidos.component.css']
})
export class MangaVendidosComponent {
  dataSource: MatTableDataSource<Manga>;
  displayedColumns: string[] = ['name', 'chapter', 'price'];
  constructor(private vendorService: VendorService) {
    this.dataSource = new MatTableDataSource();
    this.vendorService.getMangaSold().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }
}
