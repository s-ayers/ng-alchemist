import { TestBed } from '@angular/core/testing';

import { AlchemistThemeService } from './alchemist-theme.service';

describe('AlchemistThemeService', () => {
  let service: AlchemistThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlchemistThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
