import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MangaService} from "../../shared/service/manga.service";
import {Manga} from "../../shared/models/manga.model";
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaForm: FormGroup;

  constructor(private fb: FormBuilder, private mangaService: MangaService, private router: Router) {
    this.mangaForm = this.fb.group({
      name: ['', Validators.required],
      chapter: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publication: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.mangaForm.valid) {
      const manga = new Manga(this.mangaForm.value.name, this.mangaForm.value.chapter,
        this.mangaForm.value.description, this.mangaForm.value.author,
        this.mangaForm.value.genre, this.mangaForm.value.publication,
        this.mangaForm.value.image
      )
      this.mangaService.addManga(manga).subscribe(
        data => this.router.navigate(['/manga'])
      );
    }
  }
}
