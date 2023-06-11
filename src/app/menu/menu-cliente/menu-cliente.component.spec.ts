import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteComponent } from './menu-cliente.component';

describe('MenuClienteComponent', () => {
  let component: MenuClienteComponent;
  let fixture: ComponentFixture<MenuClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuClienteComponent]
    });
    fixture = TestBed.createComponent(MenuClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
