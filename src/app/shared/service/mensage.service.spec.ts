import { TestBed } from '@angular/core/testing';

import { MensageService } from './mensage.service';

describe('MensageService', () => {
  let service: MensageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
