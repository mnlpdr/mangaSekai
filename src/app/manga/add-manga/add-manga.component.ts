import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MangaService} from "../../shared/service/manga.service";
import {Manga} from "../../shared/models/manga.model";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaForm!: FormGroup;
  mangaRegister = true;
  nameBotao = "Register";
  manga: Manga;


  constructor(private fb: FormBuilder, private mangaService: MangaService, private router: Router, private routeActive: ActivatedRoute) {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.manga = new Manga("", 0, 0,  "", "", "", "", "")
    if (id) {
      this.mangaRegister = false;
      this.nameBotao = "Save";
      this.mangaService.getManga(id).subscribe(
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
        name: [this.manga.name, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ0-9 ]+$')]],
        chapter: [this.manga.chapter, [Validators.required, Validators.pattern('^[0-9]+$')]],
        price: [this.manga.price, [Validators.required, Validators.pattern('^[0-9]+$')]],
        description: [this.manga.description, [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ0-9 ,()]+$')]],
        author: [this.manga.author, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        genre: [this.manga.genre, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        publication: [this.manga.publication, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
        image: [this.manga.image, [Validators.required]]
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.mangaForm.valid) {
      const id = this.manga.id;
      this.manga = this.mangaForm.value;
      this.manga.price = +this.manga.price;
      this.manga.chapter = +this.manga.chapter;
      this.manga.id = id;
      if (this.mangaRegister) {
        this.mangaService.addManga(this.manga).subscribe(
          data => this.router.navigate(['/manga'])
        );
      }
      else {
        this.mangaService.updateManga(this.manga).subscribe(
          data => this.router.navigate(['/manga'])
        );
      }
    }
    else {
      alert('Invalid form');
    }
  }
}
