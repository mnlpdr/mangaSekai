import { TestBed } from '@angular/core/testing';

import { VendorFirestoreService } from '../vendor-firestore.service';

describe('VendorFirestoreService', () => {
  let service: VendorFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
