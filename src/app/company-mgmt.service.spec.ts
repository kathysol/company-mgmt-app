import { TestBed } from '@angular/core/testing';

import { CompanyMgmtService } from './company-mgmt.service';

describe('CompanyMgmtService', () => {
  let service: CompanyMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
