import { TestBed } from '@angular/core/testing';

import { PortfolioRecomService } from './portfolio-recom.service';

describe('PortfolioRecomService', () => {
  let service: PortfolioRecomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioRecomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
