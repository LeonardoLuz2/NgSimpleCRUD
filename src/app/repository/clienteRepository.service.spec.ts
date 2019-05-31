/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClienteRepositoryService } from './clienteRepository.service';

describe('Service: ClienteRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteRepositoryService]
    });
  });

  it('should ...', inject([ClienteRepositoryService], (service: ClienteRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
