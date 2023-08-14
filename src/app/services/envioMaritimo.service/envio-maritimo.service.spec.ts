import { TestBed } from '@angular/core/testing';

import { EnvioMaritimoService } from './envio-maritimo.service';

describe('EnvioMaritimoService', () => {
  let service: EnvioMaritimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioMaritimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
