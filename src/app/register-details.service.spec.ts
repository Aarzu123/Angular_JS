import { TestBed } from '@angular/core/testing';

import { RegisterDetailsService } from './register-details.service';

describe('RegisterDetailsService', () => {
  let service: RegisterDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
