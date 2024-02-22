import { TestBed } from '@angular/core/testing';

import { BookAPIService } from './book125-api.service';

describe('Book125ApiService', () => {
  let service: BookAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
