import { TestBed } from '@angular/core/testing';

import { StudentserviceService } from './customerservice.service';

describe('StudentserviceService', () => {
  let service: StudentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
