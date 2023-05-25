import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MangaListComponent } from './manga-list/manga-list.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    MangaListComponent,
    AddMangaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FlexModule,
    NgOptimizedImage
  ],
  exports: [
    MangaListComponent,
    AddMangaComponent

  ]
})
export class MangaModule { }
