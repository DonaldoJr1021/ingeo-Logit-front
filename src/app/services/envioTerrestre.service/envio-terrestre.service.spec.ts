import { TestBed } from '@angular/core/testing';

import { EnvioTerrestreService } from './envio-terrestre.service';

describe('EnvioTerrestreService', () => {
  let service: EnvioTerrestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioTerrestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
