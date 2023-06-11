import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaListClientComponent } from './manga-list-client.component';

describe('MangaListClientComponent', () => {
  let component: MangaListClientComponent;
  let fixture: ComponentFixture<MangaListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaListClientComponent]
    });
    fixture = TestBed.createComponent(MangaListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
