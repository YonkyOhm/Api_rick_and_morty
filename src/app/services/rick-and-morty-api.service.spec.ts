import { TestBed } from '@angular/core/testing';

import { RickAndMortyApiService } from './rick-and-morty-api.service';

describe('RickAndMortyApiService', () => {
  let service: RickAndMortyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
