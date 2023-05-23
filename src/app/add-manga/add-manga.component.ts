import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MangaService} from "../manga.service";

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent implements OnInit {
  mangaForm: FormGroup;

  constructor(private fb: FormBuilder, private mangaService: MangaService) {
    this.mangaForm = this.fb.group({
      name: ['', Validators.required],
      chapter: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publication: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.mangaForm.valid) {
      this.mangaService.addManga(
        this.mangaForm.value.name,
        this.mangaForm.value.author,
        this.mangaForm.value.publication,
        this.mangaForm.value.chapter,
        this.mangaForm.value.genre
      );
      this.mangaForm.reset();
    }
  }
}
