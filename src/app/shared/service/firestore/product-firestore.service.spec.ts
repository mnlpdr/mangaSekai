import { TestBed } from '@angular/core/testing';

import { ProductFirestoreService } from './product-firestore.service';

describe('ProductFirestoreService', () => {
  let service: ProductFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
