import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaVendidosComponent } from './manga-vendidos.component';

describe('MangaVendidosComponent', () => {
  let component: MangaVendidosComponent;
  let fixture: ComponentFixture<MangaVendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangaVendidosComponent]
    });
    fixture = TestBed.createComponent(MangaVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
