import { TestBed } from '@angular/core/testing';

import { ClientFirestoreService } from './client-firestore.service';

describe('ClientFirestoreService', () => {
  let service: ClientFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
