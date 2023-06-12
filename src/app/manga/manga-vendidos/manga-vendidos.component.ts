import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';
import { VendorFirestoreService } from 'src/app/shared/service/firestore/vendor-firestore.service';

@Component({
  selector: 'app-manga-vendidos',
  templateUrl: './manga-vendidos.component.html',
  styleUrls: ['./manga-vendidos.component.css']
})
export class MangaVendidosComponent {
  dataSource: MatTableDataSource<MangaViewFirestore>;
  displayedColumns: string[] = ['name', 'chapter', 'price'];
  constructor(private vendorService: VendorFirestoreService) {
    this.dataSource = new MatTableDataSource();
    const idVendor: string = localStorage.getItem('id') || "";
    this.vendorService.getAllProductSold(idVendor).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

}
