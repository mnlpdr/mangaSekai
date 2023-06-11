import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProductShoppingCartComponent } from './get-all-product-shopping-cart.component';

describe('GetAllProductShoppingCartComponent', () => {
  let component: GetAllProductShoppingCartComponent;
  let fixture: ComponentFixture<GetAllProductShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllProductShoppingCartComponent]
    });
    fixture = TestBed.createComponent(GetAllProductShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
