import { TestBed } from '@angular/core/testing';

import { Contribuyente } from './contribuyente';

describe('Contribuyente', () => {
  let service: Contribuyente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contribuyente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
