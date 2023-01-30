import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReturnService } from './return.service';

describe('ReturnService', () => {
  let service: ReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
      ]
    });
    service = TestBed.inject(ReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
