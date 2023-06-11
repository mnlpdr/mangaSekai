import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MangaView } from 'src/app/shared/models/mangaView.model';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-manga-vendidos',
  templateUrl: './manga-vendidos.component.html',
  styleUrls: ['./manga-vendidos.component.css']
})
export class MangaVendidosComponent {
  dataSource: MatTableDataSource<MangaView>;
  displayedColumns: string[] = ['name', 'chapter', 'price'];
  constructor(private mangaService: VendorService) {
    this.dataSource = new MatTableDataSource();
    this.mangaService.getMangaSold().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
