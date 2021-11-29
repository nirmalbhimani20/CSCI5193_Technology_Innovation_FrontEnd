import { TestBed } from '@angular/core/testing';

import { EmitvalueService } from './emitvalue.service';

describe('EmitvalueService', () => {
  let service: EmitvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
