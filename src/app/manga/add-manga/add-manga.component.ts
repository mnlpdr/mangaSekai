import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { ProductFirestoreService } from 'src/app/shared/service/firestore/product-firestore.service';
import { MangaViewFirestore } from 'src/app/shared/models/firestore/registerProductFirestore';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaForm!: FormGroup;
  mangaRegister = true;
  nameBotao = "Register";
  manga: MangaViewFirestore = new MangaViewFirestore();


  constructor(private fb: FormBuilder, private mangaService: ProductFirestoreService, private router: Router, private routeActive: ActivatedRoute) {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.manga = new MangaViewFirestore()
    if (id) {
      this.mangaRegister = false;
      this.nameBotao = "Save";
      this.mangaService.getProductById(id).subscribe(
        data => {
          this.manga = data;
          this.mangaForm = this.fb.group({
            name: [this.manga.name, Validators.required],
            chapter: [this.manga.chapter, Validators.required],
            price: [this.manga.price, Validators.required],
            description: [this.manga.description, Validators.required],
            author: [this.manga.author, Validators.required],
            genre: [this.manga.genre, Validators.required],
            publication: [this.manga.publication, Validators.required],
            image: [this.manga.image, Validators.required]
          });
        }
      );
    }
    else {
      this.mangaForm = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ0-9 ]+$')]],
        chapter: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
        price: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
        description: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ0-9 ,()]+$')]],
        author: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        genre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        publication: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        image: ["", [Validators.required]]
      });
    }
  }
  ngOnInit(): void {
  
  }

  onSubmit() {
    if (this.mangaForm.valid) {
      const id = this.manga.id;
      this.manga = {id, ...this.mangaForm.value};
      this.manga.price = Number(this.manga.price);
      this.manga.chapter = Number(this.manga.chapter);
      this.manga.vendor = localStorage.getItem('id') || '';
      if (this.mangaRegister) {
        this.mangaService.registerProduct(this.manga).subscribe(
          () => this.router.navigate(['/manga'])
        );
      }
      else {
        this.mangaService.updateProduct(this.manga).subscribe(
          () => this.router.navigate(['/manga'])
        );
      }
    }
    else {
      alert('Invalid form');
    }
  }
}
