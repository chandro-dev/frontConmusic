import { TestBed } from '@angular/core/testing';

import { CancionesService } from './canciones.service';

describe('CancionesService', () => {
  let service: CancionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
