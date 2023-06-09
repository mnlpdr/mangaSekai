import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaListComponent } from './manga-list.component';

describe('MangaListComponent', () => {
  let component: MangaListComponent;
  let fixture: ComponentFixture<MangaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaListComponent]
    });
    fixture = TestBed.createComponent(MangaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
