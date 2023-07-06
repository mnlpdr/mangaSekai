import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Manga } from 'src/app/shared/models/manga/manga.model';
import { MensageService } from 'src/app/shared/service/mensage.service';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaForm!: FormGroup;
  mangaRegister = true;
  nameBotao = "Register";
  manga: Manga | undefined;

  constructor(private fb: FormBuilder, private VendorService: VendorService, private router: Router, private routeActive: ActivatedRoute, private messageService: MensageService) {
    const id = this.routeActive.snapshot.paramMap.get('id');

    if (id) {
      this.mangaRegister = false;
      this.nameBotao = "Save";
      this.VendorService.getManga(Number(id)).subscribe(
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
  ngOnInit(): void {}

  onSubmit() {
    if (this.mangaForm.valid) {
      if (this.mangaRegister) {
        this.VendorService.addManga(this.mangaForm.value).subscribe(
          () => {
            this.messageService.success('Manga registered successfully', 'Success');
            this.router.navigate(['/manga'])
          }
        );
      }
      else {
        const id = Number(this.routeActive.snapshot.paramMap.get('id'));
        this.VendorService.updateManga({ ...this.mangaForm.value, id }).subscribe(
          () => {
            this.messageService.success('Manga updated successfully', 'Success');
            this.router.navigate(['/manga'])
          }
        );
      }
    }
    else {
      this.messageService.error('Invalid form', 'Error')
    }
  }

}
