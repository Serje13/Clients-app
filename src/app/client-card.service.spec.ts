import { TestBed } from '@angular/core/testing';

import { ClientCardService } from './client-card.service';

describe('ClientCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientCardService = TestBed.get(ClientCardService);
    expect(service).toBeTruthy();
  });
});
